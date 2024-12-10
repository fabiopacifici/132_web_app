# Book Reviews App

Un’app di recensione di `libri` in cui si possono lasciare `reviews` pubblici, aiutando gli utenti a scegliere il prossimo libro da leggere.

## Descrizione

L'app Book Reviews App è un sistema di gestione dei libri che permette agli utenti di lasciare recensioni pubbliche. Le recensioni possono essere lette e valutate dagli altri utenti, aiutando a creare una comunità di lettori.

## Caratteristiche chiave

* Lasciare commenti pubblici sui libri
* Gestione dei libri con sistema di votazione

## Database

* Table: `books`
* Table: `reviews`

## Books Table

* id
* title
* author
* abstract
* pages
* year

## Reviews Table

* id
* book_id
* username
* date
* review
* vote

## Crete DB

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



```
