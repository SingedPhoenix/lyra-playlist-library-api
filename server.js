// server.js

const express = require('express');
const { Client } = require('@notionhq/client');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.NOTION_DATABASE_ID;

app.use(express.json());

app.post('/add-entry', async (req, res) => {
  try {
    const name = req.body.name || "Untitled";

    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
      },
    });

    res.status(200).json({ success: true, response });
  } catch (error) {
    console.error('Error creating Notion entry:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`✅ Server is live at http://localhost:${port}`);
});
