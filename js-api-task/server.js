const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const db = new sqlite3.Database('./quotes.db', () => {
    console.log('Connected to SQLite database.');
    initializeDatabase();
});

function initializeDatabase() {

    db.run(`CREATE TABLE IF NOT EXISTS quotes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        quote TEXT NOT NULL,
        author TEXT NOT NULL
    )`, () => {

        db.get("SELECT COUNT(*) as count FROM quotes", (err, row) => {
            if (row.count === 0) {
                const sampleQuotes = [
                    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
                    { quote: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
                    { quote: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
                    { quote: "Stay hungry, stay foolish.", author: "Steve Jobs" },
                    { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" }
                ];

                const insert = db.prepare("INSERT INTO quotes (quote, author) VALUES (?, ?)");
                sampleQuotes.forEach(quote => {
                    insert.run([quote.quote, quote.author]);
                });
                insert.finalize();

                console.log('Sample data inserted successfully');
            } else {
                console.log('Quotes already exist in the database.');
            }
        });
    });
}

app.get('/quotes', (req, res) => {
    db.all("SELECT * FROM quotes", (err, rows) => {
        res.json(rows);
    });
});

app.get('/quotes/:id', (req, res) => {
    const id = req.params.id;
    db.get("SELECT * FROM quotes WHERE id = ?", [id], (err, row) => {
        res.json(row);
    });
});

app.put('/quotes/:id', (req, res) => {
    const id = req.params.id;
    const { quote } = req.body;
    db.run("UPDATE quotes SET quote = ? WHERE id = ?", [quote, id], function() {
        res.json({ message: 'Quote updated successfully' });
    });
});

app.delete('/quotes/:id', (req, res) => {
    const id = req.params.id;
    db.run("DELETE FROM quotes WHERE id = ?", [id], function() {
        res.json({ message: 'Quote deleted successfully' });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

