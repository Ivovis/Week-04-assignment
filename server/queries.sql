CREATE TABLE "guestBook" (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "guestName" VARCHAR(60),
    "guestComment" TEXT    
);