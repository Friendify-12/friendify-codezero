-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema friendify
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema friendify
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `friendify` DEFAULT CHARACTER SET utf8 ;
USE `friendify` ;

-- -----------------------------------------------------
-- Table `friendify`.`interests`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `friendify`.`interests` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `interestscol` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `friendify`.`profiles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `friendify`.`profiles` (
  `id` INT NOT NULL,
  `location_zip` VARCHAR(5) NULL,
  `image` BLOB NULL,
  `age` INT NULL,
  `gender` VARCHAR(1) NOT NULL,
  `bio` VARCHAR(1000) NULL,
  `created_at` DATETIME GENERATED ALWAYS AS (CURRENT_TIMESTAMP) VIRTUAL,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `friendify`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `friendify`.`users` (
  `id` INT NOT NULL,
  `username` VARCHAR(45) NULL,
  `first_name` VARCHAR(255) NULL,
  `last_name` VARCHAR(255) NULL,
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(256) NULL,
  `created_at` DATETIME GENERATED ALWAYS AS (CURRENT_TIMESTAMP) VIRTUAL,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `interests_id` INT NOT NULL,
  `profiles_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_users_interests1_idx` (`interests_id` ASC) VISIBLE,
  INDEX `fk_users_profiles1_idx` (`profiles_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_interests1`
    FOREIGN KEY (`interests_id`)
    REFERENCES `friendify`.`interests` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_profiles1`
    FOREIGN KEY (`profiles_id`)
    REFERENCES `friendify`.`profiles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `friendify`.`events`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `friendify`.`events` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(60) NULL,
  `description` VARCHAR(1000) NULL,
  `date` DATETIME NULL,
  `location` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `friendify`.`attendees`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `friendify`.`attendees` (
  `users_id` INT NOT NULL,
  `events_id` INT NOT NULL,
  PRIMARY KEY (`users_id`, `events_id`),
  INDEX `fk_users_has_events_events1_idx` (`events_id` ASC) VISIBLE,
  INDEX `fk_users_has_events_users_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_has_events_users`
    FOREIGN KEY (`users_id`)
    REFERENCES `friendify`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_events_events1`
    FOREIGN KEY (`events_id`)
    REFERENCES `friendify`.`events` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `friendify`.`messages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `friendify`.`messages` (
  `message_title` VARCHAR(45) NULL,
  `message_body` VARCHAR(1000) NULL)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
