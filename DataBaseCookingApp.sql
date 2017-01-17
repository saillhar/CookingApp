CREATE DATABASE `cookingapp`;

CREATE TABLE `recipe` (
  `recipe_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `image_url` varchar(255) NOT NULL COMMENT 'tableau Json contenant toutes les urls des images.',
  `preparation_time` int(11) NOT NULL,
  `cooking_time` int(11) NOT NULL,
  `ingredients` varchar(255) NOT NULL COMMENT 'tableau Json contenant des tableaux[quantité,ingrédient]',
  `steps` mediumtext,
  PRIMARY KEY (`recipe_id`),
  UNIQUE KEY `recipe_id_UNIQUE` (`recipe_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `nickname` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `surname` varchar(45) NOT NULL,
  `mail` varchar(45) NOT NULL,
  `role` int(11) NOT NULL DEFAULT '2' COMMENT '1:Admin\n2:Client',
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `mail_UNIQUE` (`mail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
