-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 07, 2025 at 10:50 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `electoral_candidate`
--

-- --------------------------------------------------------

--
-- Table structure for table `advocates`
--

CREATE TABLE `advocates` (
  `Candidate_ID` int(11) NOT NULL,
  `Stance_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `advocates`
--

INSERT INTO `advocates` (`Candidate_ID`, `Stance_ID`) VALUES
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 16),
(2, 2),
(2, 5),
(2, 6),
(2, 8),
(2, 14),
(2, 16),
(3, 1),
(3, 7),
(3, 8),
(3, 9),
(4, 4),
(4, 5),
(4, 6),
(4, 7),
(4, 16),
(5, 1),
(5, 5),
(5, 8),
(5, 10),
(5, 14),
(5, 15),
(6, 1),
(6, 5),
(6, 6),
(6, 9),
(6, 11),
(7, 1),
(7, 6),
(7, 8),
(7, 14),
(7, 15),
(7, 16),
(8, 5),
(8, 6),
(8, 8),
(8, 15),
(8, 16),
(9, 3),
(9, 4),
(9, 5),
(9, 10),
(9, 11),
(10, 2),
(10, 5),
(10, 6),
(10, 7),
(10, 16),
(11, 3),
(11, 4),
(11, 6),
(11, 8),
(11, 10),
(11, 16),
(12, 3),
(12, 8),
(12, 9),
(12, 10),
(12, 16),
(13, 2),
(13, 5),
(13, 12),
(13, 13),
(13, 14),
(13, 15),
(14, 1),
(14, 7),
(14, 9),
(14, 11),
(15, 3),
(15, 4),
(15, 5),
(15, 6),
(15, 7),
(15, 8),
(15, 16),
(16, 1),
(16, 4),
(16, 5),
(16, 9),
(16, 10),
(16, 11),
(17, 1),
(17, 2),
(17, 3),
(17, 10),
(17, 13),
(18, 1),
(18, 4),
(18, 6),
(18, 8),
(18, 9),
(18, 16),
(19, 5),
(19, 6),
(19, 16),
(20, 3),
(20, 4),
(20, 8),
(20, 12),
(20, 13),
(20, 14),
(20, 15),
(21, 3),
(21, 4),
(21, 8),
(21, 13),
(22, 1),
(22, 5),
(22, 9),
(22, 10),
(22, 11),
(23, 5),
(23, 6),
(23, 11),
(23, 16),
(24, 1),
(24, 5),
(24, 6),
(24, 8),
(24, 9),
(24, 11),
(25, 1),
(25, 2),
(25, 3),
(25, 4),
(25, 5),
(25, 6),
(25, 7),
(25, 8),
(26, 2),
(26, 3),
(26, 4),
(26, 5),
(26, 16),
(27, 5),
(27, 6),
(27, 9),
(27, 10),
(27, 11),
(28, 6),
(29, 4),
(29, 6),
(29, 8),
(29, 14),
(29, 15),
(29, 16),
(30, 3),
(30, 4),
(30, 5),
(30, 6),
(30, 7),
(30, 11),
(31, 1),
(31, 5),
(31, 7),
(31, 8),
(31, 9),
(31, 11),
(32, 1),
(32, 3),
(32, 7),
(32, 9),
(33, 3),
(33, 7),
(33, 8),
(34, 9),
(34, 10),
(34, 11),
(34, 12),
(34, 13),
(34, 14),
(34, 15),
(34, 16),
(35, 1),
(35, 3),
(35, 4),
(35, 5),
(35, 6),
(35, 7),
(35, 8),
(35, 9),
(35, 10),
(35, 11),
(35, 16),
(36, 2),
(36, 12),
(36, 13),
(36, 14),
(36, 15),
(37, 1),
(37, 3),
(37, 4),
(37, 9),
(37, 15),
(38, 1),
(38, 5),
(38, 11),
(39, 4),
(39, 5),
(39, 7),
(39, 10),
(39, 16),
(40, 3),
(40, 4),
(40, 5),
(40, 6),
(40, 7),
(40, 16),
(41, 6),
(41, 8),
(41, 16),
(42, 4),
(42, 8),
(42, 16),
(44, 1),
(44, 5),
(44, 6),
(44, 16),
(45, 1),
(45, 3),
(45, 7),
(45, 12),
(45, 14),
(45, 15);

-- --------------------------------------------------------

--
-- Table structure for table `against`
--

CREATE TABLE `against` (
  `Candidate_ID` int(11) NOT NULL,
  `Stance_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `against`
--

INSERT INTO `against` (`Candidate_ID`, `Stance_ID`) VALUES
(1, 2),
(1, 13),
(2, 12),
(3, 11),
(6, 14),
(6, 15),
(11, 12),
(11, 13),
(12, 12),
(12, 13),
(13, 1),
(13, 7),
(13, 9),
(14, 2),
(15, 2),
(15, 11),
(18, 12),
(18, 13),
(22, 12),
(23, 12),
(24, 14),
(24, 15),
(25, 9),
(25, 10),
(25, 11),
(25, 12),
(25, 13),
(25, 14),
(25, 15),
(25, 16),
(26, 12),
(26, 14),
(26, 15),
(27, 1),
(27, 2),
(29, 12),
(29, 13),
(31, 2),
(31, 12),
(31, 13),
(34, 1),
(34, 2),
(34, 3),
(34, 4),
(34, 5),
(34, 6),
(34, 7),
(34, 8),
(37, 2),
(37, 12),
(37, 13),
(37, 14),
(37, 15),
(39, 2),
(41, 12),
(42, 11),
(42, 12),
(44, 12),
(44, 13);

-- --------------------------------------------------------

--
-- Table structure for table `candidate`
--

CREATE TABLE `candidate` (
  `Candidate_ID` int(11) NOT NULL,
  `Ballot_Number` int(11) NOT NULL,
  `Candidate_FirstName` varchar(255) NOT NULL,
  `Candidate_LastName` varchar(255) NOT NULL,
  `Party_ID` int(11) NOT NULL,
  `Age` int(11) NOT NULL,
  `Location` varchar(255) NOT NULL,
  `Sex` varchar(15) NOT NULL,
  `Highest_Education_Attained` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `candidate`
--

INSERT INTO `candidate` (`Candidate_ID`, `Ballot_Number`, `Candidate_FirstName`, `Candidate_LastName`, `Party_ID`, `Age`, `Location`, `Sex`, `Highest_Education_Attained`) VALUES
(1, 1, 'Chris Benedict', 'Solis', 6, 52, 'Malay, Aklan', 'Male', 4),
(2, 2, 'Edmundo Mayor Jr.', 'Tolentino', 5, 49, 'Malay, Aklan', 'Male', 5),
(3, 1, 'Nicole Ashley', 'Dy', 8, 30, 'Malay, Aklan', 'Female', 4),
(4, 2, 'Angel May', 'Janiola', 5, 34, 'Malay, Aklan', 'Female', 3),
(5, 3, 'Stefan', 'Niedes', 7, 45, 'Malay, Aklan', 'Male', 2),
(6, 1, 'Christel Hope', 'Ong', 8, 36, 'Malay, Aklan', 'Female', 3),
(7, 2, 'Cedric', 'Oyco', 7, 49, 'Malay, Aklan', 'Male', 3),
(8, 1, 'Luis', 'Borbolla', 7, 34, 'Malay, Aklan', 'Male', 4),
(9, 2, 'John Asher', 'Elisan', 6, 47, 'Malay, Aklan', 'Male', 3),
(10, 3, 'Hans Luis', 'Magtoto', 6, 46, 'Malay, Aklan', 'Male', 2),
(11, 4, 'Ace Zeus', 'Rimo', 9, 39, 'Malay, Aklan', 'Male', 2),
(12, 5, 'Ron', 'Trinidad', 9, 43, 'Malay, Aklan', 'Male', 5),
(13, 1, 'John Clyde', 'Aparicio', 6, 60, 'Malay, Aklan', 'Male', 3),
(14, 2, 'Leona', 'Blanclafor', 8, 48, 'Malay, Aklan', 'Female', 3),
(15, 3, 'Michaela', 'Borces', 7, 44, 'Malay, Aklan', 'Female', 4),
(16, 1, 'Eleah Joy', 'Melchor', 6, 38, 'Malay, Aklan', 'Female', 3),
(17, 2, 'Sherwin Paul', 'Sabandal', 7, 51, 'Malay, Aklan', 'Male', 3),
(18, 1, 'Angela Denise', 'Almazan', 9, 38, 'Malay, Aklan', 'Female', 3),
(19, 2, 'Dale Louise', 'Almonia', 7, 43, 'Malay, Aklan', 'Male', 4),
(20, 3, 'John Benedict', 'Aparicio', 6, 55, 'Malay, Aklan', 'Male', 2),
(21, 4, 'Eryl Joseph', 'Aspera', 5, 49, 'Malay, Aklan', 'Male', 3),
(22, 5, 'Samantha Lodenn', 'Lansoy', 7, 39, 'Malay, Aklan', 'Female', 3),
(23, 6, 'Anne Stephanie', 'Rio', 6, 54, 'Malay, Aklan', 'Female', 3),
(24, 7, 'Marinelle Joan', 'Tambolero', 8, 28, 'Malay, Aklan', 'Female', 4),
(25, 1, 'Adriel Neyro', 'Caraig', 5, 40, 'Iloilo City, Iloilo', 'Male', 4),
(26, 2, 'Emerson', 'Contreras', 4, 35, 'Iloilo City, Iloilo', 'Male', 2),
(27, 3, 'Keith Ashly', 'Domingo', 2, 52, 'Iloilo City, Iloilo', 'Male', 4),
(28, 1, 'Julia Louise', 'Contreras', 4, 27, 'Iloilo City, Iloilo', 'Female', 5),
(29, 2, 'Rainier RJ', 'Espinal', 1, 34, 'Iloilo City, Iloilo', 'Male', 3),
(30, 3, 'Kent Francis', 'Genilo', 2, 35, 'Iloilo City, Iloilo', 'Male', 2),
(31, 4, 'Hansen Maeve', 'Quindao', 3, 28, 'Iloilo City, Iloilo', 'Female', 5),
(32, 1, 'Nina Claudia', 'Del Rosario', 3, 27, 'Iloilo City, Iloilo', 'Female', 4),
(33, 2, 'Christian Joseph', 'Hernia', 4, 37, 'Iloilo City, Iloilo', 'Male', 3),
(34, 3, 'Christian Jave', 'Hulleza', 2, 50, 'Iloilo City, Iloilo', 'Male', 4),
(35, 4, 'Francis', 'Young', 5, 19, 'Iloilo City, Iloilo', 'Male', 3),
(36, 1, 'Francis Nikolai', 'Arceo', 4, 35, 'Iloilo City, Iloilo', 'Male', 3),
(37, 2, 'Julo Acdol', 'Bretaña', 4, 38, 'Iloilo City, Iloilo', 'Male', 3),
(38, 3, 'Jasmine', 'Magadan', 2, 34, 'Iloilo City, Iloilo', 'Female', 4),
(39, 4, 'Mark Leonel', 'Misola', 2, 42, 'Iloilo City, Iloilo', 'Male', 3),
(40, 5, 'Kenneth', 'Mondejar', 2, 29, 'Iloilo City, Iloilo', 'Male', 4),
(41, 6, 'Matthew', 'Simpas', 1, 51, 'Iloilo City, Iloilo', 'Male', 3),
(42, 7, 'Chakinzo', 'Sombito', 1, 47, 'Iloilo City, Iloilo', 'Male', 3),
(43, 8, 'Joshua', 'Ticotskie', 5, 59, 'Iloilo City, Iloilo', 'Male', 2),
(44, 9, 'Myra', 'Verde', 4, 25, 'Iloilo City, Iloilo', 'Female', 3),
(45, 10, 'Mae Maricar', 'Yap', 3, 29, 'Iloilo City, Iloilo', 'Female', 4);

-- --------------------------------------------------------

--
-- Table structure for table `committed`
--

CREATE TABLE `committed` (
  `Candidate_ID` int(11) NOT NULL,
  `Offense_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `committed`
--

INSERT INTO `committed` (`Candidate_ID`, `Offense_ID`) VALUES
(5, 2),
(7, 3),
(13, 4),
(24, 1),
(25, 2),
(27, 3),
(27, 5),
(27, 6),
(27, 7),
(30, 8),
(34, 2),
(34, 5),
(40, 1);

-- --------------------------------------------------------

--
-- Table structure for table `educational_attainment`
--

CREATE TABLE `educational_attainment` (
  `Attainment_ID` int(11) NOT NULL,
  `Attainment_Name` varchar(255) NOT NULL,
  `Attainment_Level` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `educational_attainment`
--

INSERT INTO `educational_attainment` (`Attainment_ID`, `Attainment_Name`, `Attainment_Level`) VALUES
(1, 'None', 1),
(2, 'Highschool', 2),
(3, 'Bachelor\'s Degree', 3),
(4, 'Master\'s Degree', 4),
(5, 'Doctorate', 5);

-- --------------------------------------------------------

--
-- Table structure for table `former`
--

CREATE TABLE `former` (
  `Candidate_ID` int(11) NOT NULL,
  `Position_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `former`
--

INSERT INTO `former` (`Candidate_ID`, `Position_ID`) VALUES
(1, 1),
(2, 8),
(4, 3),
(5, 3),
(7, 5),
(9, 4),
(11, 7),
(12, 7),
(13, 4),
(13, 6),
(13, 7),
(14, 6),
(16, 7),
(19, 7),
(20, 7),
(24, 7),
(26, 5),
(27, 8),
(28, 6),
(30, 8),
(32, 7),
(34, 6),
(37, 7),
(39, 7),
(42, 7);

-- --------------------------------------------------------

--
-- Table structure for table `offense`
--

CREATE TABLE `offense` (
  `Offense_ID` int(11) NOT NULL,
  `Offense_Name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `offense`
--  

INSERT INTO `offense` (`Offense_ID`, `Offense_Name`) VALUES
(1, 'Illegal Possession of Firearms'),
(2, 'Corruption'),
(3, 'Embezzlement'),
(4, 'Public Indecency'),
(5, 'Fraud'),
(6, 'Driving without a License'),
(7, 'Speeding'),
(8, 'Attempted Homicide');

-- --------------------------------------------------------

--
-- Table structure for table `party_list`
--

CREATE TABLE `party_list` (
  `Party_ID` int(11) NOT NULL,
  `Party_Name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `party_list`
--

INSERT INTO `party_list` (`Party_ID`, `Party_Name`) VALUES
(1, 'ILOILO (Iloilo Local Industries and Locomotives)'),
(2, 'LSD (Liwanag sa Dilim)'),
(3, 'Epiko'),
(4, 'KK (Kinabukasan para sa Kabataan)'),
(5, 'Independent'),
(6, '3A (Aklan Akbayan Association)'),
(7, 'Sagana'),
(8, 'Bahay Ngiti'),
(9, 'Malay Vendors');

-- --------------------------------------------------------

--
-- Table structure for table `political_position`
--

CREATE TABLE `political_position` (
  `Position_ID` int(11) NOT NULL,
  `Position_Name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `political_position`
--

INSERT INTO `political_position` (`Position_ID`, `Position_Name`) VALUES
(1, 'Member, House Of Representatives'),
(2, 'Provincial Governor'),
(3, 'Provincial Vice-Governor'),
(4, 'Member, Sangguniang Panlalawigan'),
(5, 'Mayor'),
(6, 'Vice-Mayor'),
(7, 'Member, Sangguniang Bayan'),
(8, 'Senator');

-- --------------------------------------------------------

--
-- Table structure for table `running_for`
--

CREATE TABLE `running_for` (
  `Candidate_ID` int(11) NOT NULL,
  `Position_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `running_for`
--

INSERT INTO `running_for` (`Candidate_ID`, `Position_ID`) VALUES
(1, 1),
(2, 1),
(3, 2),
(4, 2),
(5, 2),
(6, 3),
(7, 3),
(8, 4),
(9, 4),
(10, 4),
(11, 4),
(12, 4),
(13, 5),
(14, 5),
(15, 5),
(16, 6),
(17, 6),
(18, 7),
(19, 7),
(20, 7),
(21, 7),
(22, 7),
(23, 7),
(24, 7),
(25, 1),
(26, 1),
(27, 1),
(28, 5),
(29, 5),
(30, 5),
(31, 5),
(32, 6),
(33, 6),
(34, 6),
(35, 6),
(36, 7),
(37, 7),
(38, 7),
(39, 7),
(40, 7),
(41, 7),
(42, 7),
(43, 7),
(44, 7),
(45, 7);

-- --------------------------------------------------------

--
-- Table structure for table `stance`
--

CREATE TABLE `stance` (
  `Stance_ID` int(11) NOT NULL,
  `Stance_Name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stance`
--

INSERT INTO `stance` (`Stance_ID`, `Stance_Name`) VALUES
(1, 'Gender Equality'),
(2, 'Abortion'),
(3, 'Seniors and PWD Benefits'),
(4, 'OFW Protection'),
(5, 'Education Sector'),
(6, 'Agriculture Sector'),
(7, 'Free Healthcare'),
(8, 'Environment and Development'),
(9, 'SOGIE Bill'),
(10, 'Indigenous People'),
(11, 'Divorce'),
(12, 'Contractualization'),
(13, 'Foreign Businesses'),
(14, 'War on Drugs'),
(15, 'Military Forces'),
(16, 'Transportation Sector');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `advocates`
--
ALTER TABLE `advocates`
  ADD PRIMARY KEY (`Candidate_ID`,`Stance_ID`),
  ADD KEY `Stance_ID` (`Stance_ID`);

--
-- Indexes for table `against`
--
ALTER TABLE `against`
  ADD PRIMARY KEY (`Candidate_ID`,`Stance_ID`),
  ADD KEY `Stance_ID` (`Stance_ID`);

--
-- Indexes for table `candidate`
--
ALTER TABLE `candidate`
  ADD PRIMARY KEY (`Candidate_ID`),
  ADD KEY `Party_ID` (`Party_ID`),
  ADD KEY `Highest_Education_Attained` (`Highest_Education_Attained`);

--
-- Indexes for table `committed`
--
ALTER TABLE `committed`
  ADD PRIMARY KEY (`Candidate_ID`,`Offense_ID`),
  ADD KEY `Offense_ID` (`Offense_ID`);

--
-- Indexes for table `educational_attainment`
--
ALTER TABLE `educational_attainment`
  ADD PRIMARY KEY (`Attainment_ID`);

--
-- Indexes for table `former`
--
ALTER TABLE `former`
  ADD PRIMARY KEY (`Candidate_ID`,`Position_ID`),
  ADD KEY `Position_ID` (`Position_ID`);

--
-- Indexes for table `offense`
--
ALTER TABLE `offense`
  ADD PRIMARY KEY (`Offense_ID`);

--
-- Indexes for table `party_list`
--
ALTER TABLE `party_list`
  ADD PRIMARY KEY (`Party_ID`);

--
-- Indexes for table `political_position`
--
ALTER TABLE `political_position`
  ADD PRIMARY KEY (`Position_ID`);

--
-- Indexes for table `running_for`
--
ALTER TABLE `running_for`
  ADD PRIMARY KEY (`Candidate_ID`,`Position_ID`),
  ADD KEY `Position_ID` (`Position_ID`);

--
-- Indexes for table `stance`
--
ALTER TABLE `stance`
  ADD PRIMARY KEY (`Stance_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `candidate`
--
ALTER TABLE `candidate`
  MODIFY `Candidate_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `educational_attainment`
--
ALTER TABLE `educational_attainment`
  MODIFY `Attainment_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `offense`
--
ALTER TABLE `offense`
  MODIFY `Offense_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `party_list`
--
ALTER TABLE `party_list`
  MODIFY `Party_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `political_position`
--
ALTER TABLE `political_position`
  MODIFY `Position_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `stance`
--
ALTER TABLE `stance`
  MODIFY `Stance_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `advocates`
--
ALTER TABLE `advocates`
  ADD CONSTRAINT `advocates_ibfk_1` FOREIGN KEY (`Candidate_ID`) REFERENCES `candidate` (`Candidate_ID`),
  ADD CONSTRAINT `advocates_ibfk_2` FOREIGN KEY (`Stance_ID`) REFERENCES `stance` (`Stance_ID`);

--
-- Constraints for table `against`
--
ALTER TABLE `against`
  ADD CONSTRAINT `against_ibfk_1` FOREIGN KEY (`Candidate_ID`) REFERENCES `candidate` (`Candidate_ID`),
  ADD CONSTRAINT `against_ibfk_2` FOREIGN KEY (`Stance_ID`) REFERENCES `stance` (`Stance_ID`);

--
-- Constraints for table `candidate`
--
ALTER TABLE `candidate`
  ADD CONSTRAINT `candidate_ibfk_1` FOREIGN KEY (`Party_ID`) REFERENCES `party_list` (`Party_ID`),
  ADD CONSTRAINT `candidate_ibfk_2` FOREIGN KEY (`Highest_Education_Attained`) REFERENCES `educational_attainment` (`Attainment_ID`);

--
-- Constraints for table `committed`
--
ALTER TABLE `committed`
  ADD CONSTRAINT `committed_ibfk_1` FOREIGN KEY (`Candidate_ID`) REFERENCES `candidate` (`Candidate_ID`),
  ADD CONSTRAINT `committed_ibfk_2` FOREIGN KEY (`Offense_ID`) REFERENCES `offense` (`Offense_ID`);

--
-- Constraints for table `former`
--
ALTER TABLE `former`
  ADD CONSTRAINT `former_ibfk_1` FOREIGN KEY (`Candidate_ID`) REFERENCES `candidate` (`Candidate_ID`),
  ADD CONSTRAINT `former_ibfk_2` FOREIGN KEY (`Position_ID`) REFERENCES `political_position` (`Position_ID`);

--
-- Constraints for table `running_for`
--
ALTER TABLE `running_for`
  ADD CONSTRAINT `running_for_ibfk_1` FOREIGN KEY (`Candidate_ID`) REFERENCES `candidate` (`Candidate_ID`),
  ADD CONSTRAINT `running_for_ibfk_2` FOREIGN KEY (`Position_ID`) REFERENCES `political_position` (`Position_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
