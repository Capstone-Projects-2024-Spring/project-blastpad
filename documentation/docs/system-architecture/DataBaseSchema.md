---
sidebar_position: 5
---


# Database Schema

The following is our database schema. A visual version of the schema exists in the Design Document in the form of an Entity-Relationship diagram. Our API will be responsible for CRUD, creating, reading, updating and deleting records into the database. Children's information will be especially restricted with COPPA (Children's Online Privacy Protection Act in mind.

| Table      | Fields           | Type         | Constraints                 |
| ---------- | ---------------- | ------------ | --------------------------- |
| Teachers   | teacher_id       | INT          | PK                          |
|            | first_name       | VARCHAR(255) |                             |
|            | last_name        | VARCHAR(255) |                             |
|            | username         | VARCHAR(255) |                             |
|            | password         | VARCHAR(255) |                             |
| Classrooms | room_number      | INT          | PK                          |
|            | teacher_id       | INT          | FK (Teachers.teacher_id)    |
| Students   | student_id       | INT          | PK                          |
|            | first_name       | VARCHAR(255) |                             |
|            | last_name        | VARCHAR(255) |                             |
|            | username         | VARCHAR(255) |                             |
|            | room_number      | INT          | FK (Classrooms.room_number) |
|            | password         | VARCHAR(255) |                             |
|            | games            | VARCHAR(255) |                             |
| Games      | game_id          | INT          | PK                          |
|            | game_name        | VARCHAR(255) |                             |
|            | name             | VARCHAR(255) |                             |
|            | last_edited_date | DATE         |                             |
|            | json_file        | BLOB         |                             |
|            | image_icon       | BLOB         |                             |
