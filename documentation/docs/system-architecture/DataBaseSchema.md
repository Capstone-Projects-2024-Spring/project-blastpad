---
sidebar_position: 5
---


# Database Schema

The following is our database schema. A visual version of the schema exists in the Design Document in the form of an Entity-Relationship diagram. Our API will be responsible for CRUD, creating, reading, updating and deleting records into the database. Children's information will be especially restricted with COPPA (Children's Online Privacy Protection Act in mind.)

| Entity                 | Attributes                    | Keys                             | Relationships                   |
|------------------------|--------------------------------|----------------------------------|----------------------------------|
| **Classrooms**         | `created_at` DATE              | `id` INT PK                      |                                  |
|                        | `invite_code` VARCHAR(255)     |                                  |                                  |
|                        | `students` INT                 |                                  |                                  |
|                        | `teacher` VARCHAR(255)         |                                  |                                  |
|                        | `title` VARCHAR(255)           |                                  |                                  |
|                        | `description` VARCHAR(255)     |                                  |                                  |
| **ClassRoomGameMetaData** | `author` VARCHAR(255)       | `id` VARCHAR(255) PK              | Belongs to Classrooms            |
|                        | `description` VARCHAR(255)     |                                  | `classroomID` INT FK             |
|                        | `uploaded` DATE                |                                  |                                  |
| **GameMetaData**       | `author` VARCHAR(255)          | `id` VARCHAR(255) PK              |                                  |
|                        | `description` VARCHAR(255)     |                                  |                                  |
|                        | `uploaded` DATE                |                                  |                                  |
		

    Entities:
        Classrooms
        ClassRoomGameMetaData
        GameMetaData

    Attributes:
        Classrooms: created_at, invite_code, students, teacher, title, description
        ClassRoomGameMetaData: author, description, uploaded, classroomID
        GameMetaData: author, description, uploaded

    Keys:
        Primary Keys: Classrooms (id), ClassRoomGameMetaData (id), GameMetaData (id)
        Foreign Key: ClassRoomGameMetaData (classroomID as a FK referencing Classrooms)

    Relationships:
        ClassRoomGameMetaData belongs to Classrooms.