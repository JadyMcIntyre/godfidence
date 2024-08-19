-- @block
INSERT INTO Users(email, bio, country)
VALUES (
        'jack@outlook.com',
        'I am jack, I like to rack',
        'AU'
    );
-- @block
SELECT *
FROM Users;
-- @block
SELECT email,
    id
FROM Users
WHERE country = 'ZA'
    AND email LIKE 'j%'
ORDER BY id DESC
LIMIT 4;