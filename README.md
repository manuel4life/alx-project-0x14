##ALX Project 0x14 - MoviesDatabase API Integration##
API Overview
The MoviesDatabase API provides comprehensive data for movies, TV shows, actors, and crew members, including:

9+ million titles (movies, series, episodes)

11+ million actors/crew members

Youtube trailers, awards, biographies, ratings, and more

Weekly/daily updates for recent titles and ratings

Use Cases:

Movie recommendation engines

Streaming platforms

Actor/film research tools

Version
Current API version: v1

Available Endpoints
Titles
Endpoint Description Parameters
GET /titles Fetch filtered/sorted titles list, info, genre, year, etc.
GET /titles/{id} Get details for a specific title info (e.g., base_info, rating)
GET /titles/x/upcoming Upcoming releases limit, page
GET /titles/series/{id} Episodes for a series -
GET /titles/episode/{id} Details for an episode info
Search
Endpoint Description Parameters
GET /titles/search/keyword/{keyword} Search by keyword exact, limit
GET /titles/search/title/{title} Search by title exact (default: false)
Actors
Endpoint Description Parameters
GET /actors List actors limit, page
GET /actors/{id} Actor details -
Utils
Endpoint Description
GET /title/utils/titleType List title types (movie, series, etc.)
GET /title/utils/genres List all genres
GET /title/utils/lists Predefined title lists (e.g., most_pop_movies)
Request and Response Format
Example Request (Get Movie by ID)
http
GET /titles/tt0111161?info=base_info HTTP/1.1
Host: api.moviesdatabase.com
Authorization: Bearer YOUR_API_KEY
Accept: application/json
Example Response (Success)
json
{
"id": "tt0111161",
"titleText": "The Shawshank Redemption",
"releaseYear": 1994,
"genres": ["Drama"],
"rating": 9.3,
"directors": ["Frank Darabont"],
"cast": [
{ "name": "Tim Robbins", "role": "Andy Dufresne" }
]
}
Error Response (401 Unauthorized)
json
{
"error": "Invalid API key",
"status": 401
}
Authentication
API Key Required (Free tier: 100 requests/hour).

Header:

http
Authorization: Bearer YOUR_API_KEY
Get your key from MoviesDatabase.

Error Handling
Code Error Solution
400 Bad Request Check query parameters
401 Unauthorized Verify API key
404 Not Found Validate resource ID
429 Rate Limit Exceeded Wait and retry
TypeScript Example:

typescript
try {
const response = await fetch('/titles/tt0111161', {
headers: { 'Authorization': 'Bearer YOUR_API_KEY' }
});
if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
const data = await response.json();
} catch (error) {
console.error("API Error:", error);
}
Usage Limits & Best Practices
Rate Limits
Free Tier: 100 requests/hour

Paid Tier: 10,000 requests/hour

Best Practices
✅ Cache responses (e.g., Redis/localStorage).
✅ Use pagination (limit=50, page=2).
✅ Filter wisely (e.g., genre=Drama&year=2020).
❌ Avoid hardcoding API keys (use .env).

Project Setup
Install Dependencies:

bash
npm install axios typescript @types/node
Run the Project:

bash
npm run dev
