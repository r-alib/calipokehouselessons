# Calipokehouse Training

Short cartoon courses for the warehouse team, each ending in a test. Static site, no build step: plain HTML + Firebase Realtime Database for test results.

## Structure

```
index.html                              start page: name → course list; "Admin" → results panel
courses/warehouse-picking-packing.html  course 1 (7 lessons, 35 scenes, 10-question test)
shared/courses.js                       course catalog shown on the start page
shared/firebase-config.js               Firebase config (same project as CALIPOKE STATION)
```

## How it works

- The trainee enters their name on `index.html`. The name is remembered on that device.
- A course opens in a new tab as `courses/<id>.html?name=<trainee>`.
- When the final test is finished, the course writes one record to `training/results` in the Realtime Database:

```json
{ "name": "Sahara", "course": "warehouse-picking-packing", "score": 9, "total": 10,
  "passed": true, "wrong": [3], "ts": 1760388000000 }
```

- Entering the name `Admin` on the start page opens the results panel: totals, latest result per person, every attempt, CSV export.

## Adding a course

1. Copy `courses/warehouse-picking-packing.html` to `courses/<new-id>.html`.
2. Set `COURSE_ID` at the top of its script, replace `LESSONS` and `QUIZ`.
3. Add an entry to `shared/courses.js`.

## Firebase rules

The site reads and writes only under `training/`. Make sure the database rules allow it, e.g. add to the existing rules:

```json
"training": { ".read": true, ".write": true }
```

(Tighten later if needed: `.write` can be limited to `results/$id` with `newData.hasChildren(['name','course','score'])`.)

## Deploy on GitHub Pages

See the chat instructions, or: push to `main`, then Settings → Pages → Source: Deploy from a branch → `main` / `/ (root)`.
