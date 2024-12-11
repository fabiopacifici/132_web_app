# Book Reviews App

Un’app di recensione di `libri` in cui si possono lasciare `reviews` pubblici, aiutando gli utenti a scegliere il prossimo libro da leggere.

## Backend

### Descrizione

L'app Book Reviews App è un sistema di gestione dei libri che permette agli utenti di lasciare recensioni pubbliche. Le recensioni possono essere lette e valutate dagli altri utenti, aiutando a creare una comunità di lettori.

### Caratteristiche chiave

* Lasciare commenti pubblici sui libri
* Gestione dei libri con sistema di votazione

### Database

* Table: `books`
* Table: `reviews`

### Books Table

* id
* title
* author
* abstract
* pages
* year

### Reviews Table

* id
* book_id
* username
* date
* review
* vote

### Crete DB

```sql

CREATE SCHEMA `132_books_web_app` ;


CREATE TABLE `132_books_web_app`.`books` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(150) NOT NULL,
  `author` VARCHAR(150) NOT NULL,
  `abstract` TEXT(500) NOT NULL,
  `pages` SMALLINT NULL,
  `year` YEAR NULL,
  PRIMARY KEY (`id`));


CREATE TABLE `132_books_web_app`.`reviews` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `book_id` INT UNSIGNED NOT NULL,
  `username` VARCHAR(50) NOT NULL,
  `date` DATE NOT NULL,
  `review` TEXT(500) NOT NULL,
  `vote` TINYINT(5) NOT NULL,
  PRIMARY KEY (`id`));


ALTER TABLE `132_books_web_app`.`reviews` 
ADD INDEX `reviews_book_id_foreign_idx` (`book_id` ASC) VISIBLE;
;
ALTER TABLE `132_books_web_app`.`reviews` 
ADD CONSTRAINT `reviews_book_id_foreign`
  FOREIGN KEY (`book_id`)
  REFERENCES `132_books_web_app`.`books` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;


INSERT INTO `132_books_web_app`.`books` (`id`, `title`, `author`, `abstract`, `pages`, `year`) VALUES
(1, 'Il Signore degli Anelli', 'J.R.R. Tolkien', 'Un viaggiatore di nome Frodo deve portare un anello magico a Mordor per distruggerlo.', 1000, 1954),
(2, '1984', 'George Orwell', 'In un futuro distopico, il governo controlla ogni aspetto della vita delle persone.', 300, 1949),
(3, 'Il Cuore delle Tenebre', 'Stephen King', 'Un gruppo di amici si imbatte in un mostro nel cuore del Maine.', 500, 1983);

INSERT INTO `132_books_web_app`.`reviews` (`id`, `book_id`, `username`, `date`, `review`, `vote`) VALUES
(1, 1, 'Federico', '2022-01-01', 'Un libro fantastico che mi ha fatto pensare.', 5),
(2, 2, 'Giovanni', '2022-02-01', 'Un libro distopico che mi ha dato fastidio.', 3),
(3, 3, 'Luca', '2022-03-01', 'Un libro orrore che mi ha fatto paura.', 4);

```

### Next Steps

1. Create db ER diagram.
2. Create database and tables.
3. API | create an node/express app  
4. React | create a react app

### API | create an node/express app  

* creazione server express
* definizione prima rotta
* creazione file routes in routes/
* installazione mysql2 per connesione al db

## Frontend

* install react app
* install bootstrap bootstrap-icons
* install react-router-dom
* create react routers, layout and pages (React - Frontend)
* create components for header, footer, bookslist, singleBookCard and reviewCard

* install cors `npm install cors` (EXPRESS - Backend)
* configure cors middleware (EXPRESS - Backend)

* ReviewForm component (React - Frontend)
* Endpoint API for reviewForm (Express - Backend)
