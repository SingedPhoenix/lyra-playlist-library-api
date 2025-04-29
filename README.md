# Lyra Playlist Library API

This is a lightweight Express server that syncs playlist data into a Notion database. Built for use with the Lyra system from Project Olympus.

## Features
- Accepts JSON `POST` requests to create new entries in Notion
- Uses Notion API v2 via `@notionhq/client`
- Reads configuration from a `.env` file

## Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env` file at the root with the following values:
```bash
NOTION_TOKEN=your-secret-notion-integration-token
NOTION_DATABASE_ID=your-notion-database-id
PORT=3000
```

### 3. Start the Server
```bash
npm start
```

### 4. Test Endpoint
Send a POST request to `http://localhost:3000/add-entry`:
```json
{
  "name": "Test Song Title"
}
```

This will create a new row in your Notion database with that title.

---

Built with 💜 for playlist inventory automation.
