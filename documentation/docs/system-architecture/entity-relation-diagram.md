---
sidebar_position: 3
---

# Entity Relation Diagram

According to the following Entity-Relationship diagram below, there is 1 relationship we can observe according to our Supabase database.
1. "Belongs to" Relationship
This relationship is a 1 to many (1:N) relationship which shows that a single Classroom can own many ClassRoomGameMetaData entities.

The GameMetaData entity holds the description for an uploaded gamefile in the Comunity Hub.

```mermaid
---
title: "E-R Diagram SupaBase"
---
erDiagram
    Classrooms {
        id INT PK
        created_at DATE
        invite_code VARCHAR(255)
        students INT
        teacher VARCHAR(255)
        title VARCHAR(255)
        description VARCHAR(255)
    }
    ClassRoomGameMetaData{
        id VARCHAR(255) PK
        author VARCHAR(255)
        description VARCHAR(255)
        uploaded DATE
        classroomID INT FK
    }
    GameMetaData {
		id VARCHAR(255) PK
        author VARCHAR(255)
        description VARCHAR(255)
        uploaded DATE
    }
    Classrooms ||--|{ ClassRoomGameMetaData : "Belongs to"
```