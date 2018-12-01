-- MySQL dump 10.16  Distrib 10.3.10-MariaDB, for osx10.14 (x86_64)
--
-- Host: localhost    Database: billboard
-- ------------------------------------------------------
-- Server version	10.3.10-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `avaiable_dates`
--

DROP TABLE IF EXISTS `avaiable_dates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `avaiable_dates` (
  `billboard_id` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `startDate` datetime NOT NULL,
  `endDate` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `avaiable_dates_billboards_billboard_id_fk` (`billboard_id`),
  CONSTRAINT `avaiable_dates_billboards_billboard_id_fk` FOREIGN KEY (`billboard_id`) REFERENCES `billboards` (`billboard_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avaiable_dates`
--

LOCK TABLES `avaiable_dates` WRITE;
/*!40000 ALTER TABLE `avaiable_dates` DISABLE KEYS */;
/*!40000 ALTER TABLE `avaiable_dates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `billboards`
--

DROP TABLE IF EXISTS `billboards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `billboards` (
  `billboard_id` int(11) NOT NULL AUTO_INCREMENT,
  `owner_id` int(11) NOT NULL,
  PRIMARY KEY (`billboard_id`),
  KEY `billboards_owners_owner_id_fk` (`owner_id`),
  CONSTRAINT `billboards_owners_owner_id_fk` FOREIGN KEY (`owner_id`) REFERENCES `owners` (`owner_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `billboards`
--

LOCK TABLES `billboards` WRITE;
/*!40000 ALTER TABLE `billboards` DISABLE KEYS */;
INSERT INTO `billboards` VALUES (1,1),(2,2);
/*!40000 ALTER TABLE `billboards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `establishment_ads`
--

DROP TABLE IF EXISTS `establishment_ads`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `establishment_ads` (
  `billboard_id` int(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `rating` int(11) NOT NULL,
  `establishmentName` varchar(255) NOT NULL,
  PRIMARY KEY (`billboard_id`),
  CONSTRAINT `establishment_ads_billboards_billboard_id_fk` FOREIGN KEY (`billboard_id`) REFERENCES `billboards` (`billboard_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `establishment_ads`
--

LOCK TABLES `establishment_ads` WRITE;
/*!40000 ALTER TABLE `establishment_ads` DISABLE KEYS */;
/*!40000 ALTER TABLE `establishment_ads` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leasers`
--

DROP TABLE IF EXISTS `leasers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `leasers` (
  `leaser_id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  PRIMARY KEY (`leaser_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leasers`
--

LOCK TABLES `leasers` WRITE;
/*!40000 ALTER TABLE `leasers` DISABLE KEYS */;
/*!40000 ALTER TABLE `leasers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `online_ads`
--

DROP TABLE IF EXISTS `online_ads`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `online_ads` (
  `billboard_id` int(11) NOT NULL,
  `avg_traffic` double NOT NULL,
  `site_tags` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`billboard_id`),
  CONSTRAINT `online_ads_billboards_billboard_id_fk` FOREIGN KEY (`billboard_id`) REFERENCES `billboards` (`billboard_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `online_ads`
--

LOCK TABLES `online_ads` WRITE;
/*!40000 ALTER TABLE `online_ads` DISABLE KEYS */;
INSERT INTO `online_ads` VALUES (1,2,'nowhere');
/*!40000 ALTER TABLE `online_ads` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `billboard_id` int(11) NOT NULL,
  `leaser_id` int(11) NOT NULL,
  `startDate` datetime NOT NULL,
  `endDate` datetime NOT NULL,
  PRIMARY KEY (`order_id`),
  KEY `orders_billboards_billboard_id_fk` (`billboard_id`),
  KEY `orders_leasers_leaser_id_fk` (`leaser_id`),
  CONSTRAINT `orders_billboards_billboard_id_fk` FOREIGN KEY (`billboard_id`) REFERENCES `billboards` (`billboard_id`),
  CONSTRAINT `orders_leasers_leaser_id_fk` FOREIGN KEY (`leaser_id`) REFERENCES `leasers` (`leaser_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `owners`
--

DROP TABLE IF EXISTS `owners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `owners` (
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `eMail` varchar(255) NOT NULL,
  `owner_id` int(11) NOT NULL AUTO_INCREMENT,
  `IBAN` varchar(255) NOT NULL,
  PRIMARY KEY (`owner_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `owners`
--

LOCK TABLES `owners` WRITE;
/*!40000 ALTER TABLE `owners` DISABLE KEYS */;
INSERT INTO `owners` VALUES ('Yiping','Deng','y.deng@jacobs-university.de',1,'DE000000000000000000'),('Brian','Sherif','b.s@jacobs-university.de',2,'DE0000000000000');
/*!40000 ALTER TABLE `owners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment` (
  `order_id` int(11) NOT NULL,
  `creditCard` varchar(255) NOT NULL,
  `IBAN` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  CONSTRAINT `payment_orders_order_id_fk` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `street_ads`
--

DROP TABLE IF EXISTS `street_ads`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `street_ads` (
  `billboard_id` int(11) NOT NULL,
  `coordinateX` double NOT NULL,
  `coordinateY` double NOT NULL,
  `elevation` double NOT NULL,
  `rating` int(11) NOT NULL,
  PRIMARY KEY (`billboard_id`),
  CONSTRAINT `street_ads_billboards_billboard_id_fk` FOREIGN KEY (`billboard_id`) REFERENCES `billboards` (`billboard_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `street_ads`
--

LOCK TABLES `street_ads` WRITE;
/*!40000 ALTER TABLE `street_ads` DISABLE KEYS */;
INSERT INTO `street_ads` VALUES (2,1,2,2,3);
/*!40000 ALTER TABLE `street_ads` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-25 22:02:11
