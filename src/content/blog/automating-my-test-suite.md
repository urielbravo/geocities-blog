---
title: "How I Automated My Test Suite"
date: 2026-10-06
category: "technology"
imageLabel: "A terminal full of green checkmarks"
excerpt: "Three weeks of clicking, now nobody has to click anything. What I gained and the one thing I would do differently."
---

Every release used to start with the same twenty minutes of running the suite by
hand and watching a wall of green tick marks scroll past. Slow, boring, and
exactly the kind of task a machine should be doing.

The fix was not clever. I moved the suite into a pipeline, gave it a real exit
code, and made a failure block the deploy. The tests were already automated one
layer down; nobody had connected them to anything.

> A test nobody looks at is a test that quietly rots.

Total time recovered so far: about six hours a week. The part I did not expect
was the confidence — a red build is annoying, but it is honest in a way that a
skipped manual pass never was.

- Run everything, not just the changed parts
- Fail the build, do not warn about it
- Keep the output short enough that people read it
