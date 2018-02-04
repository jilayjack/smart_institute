-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 04, 2018 at 10:08 AM
-- Server version: 10.1.29-MariaDB
-- PHP Version: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `smart_institute`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_tbl`
--

CREATE TABLE `admin_tbl` (
  `admin_email_id` varchar(20) NOT NULL,
  `pass` varchar(20) NOT NULL,
  `name` varchar(15) NOT NULL,
  `m_no` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin_tbl`
--

INSERT INTO `admin_tbl` (`admin_email_id`, `pass`, `name`, `m_no`) VALUES
('admin', 'admin', 'admin', 1234);

-- --------------------------------------------------------

--
-- Table structure for table `ans_tbl`
--

CREATE TABLE `ans_tbl` (
  `ans_id` int(11) NOT NULL,
  `ans_desc` varchar(150) NOT NULL,
  `fk_qs_id` int(11) NOT NULL,
  `fk_faculty_id` int(11) NOT NULL,
  `fk_stu_id` int(11) NOT NULL,
  `ans_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ans_tbl`
--

INSERT INTO `ans_tbl` (`ans_id`, `ans_desc`, `fk_qs_id`, `fk_faculty_id`, `fk_stu_id`, `ans_date`) VALUES
(1, 'sdsad', 1, 1, 0, '2017-12-04'),
(2, 'aaaaaaa', 1, 0, 12, '2018-01-09'),
(3, 'bbbbbb', 2, 0, 12, '2018-01-22'),
(4, 'ccccc', 3, 0, 0, '2018-01-02'),
(5, 'bbbbbb', 2, 0, 12, '2018-01-21'),
(6, 'hii', 2, 0, 21, '2018-01-15'),
(7, 'ans', 3, 0, 21, '2017-10-10'),
(8, 'jnk', 13, 0, 22, '2018-01-24'),
(9, 'ans', 21, 0, 22, '2018-01-24');

-- --------------------------------------------------------

--
-- Table structure for table `course_tbl`
--

CREATE TABLE `course_tbl` (
  `course_id` int(3) NOT NULL,
  `course_title` varchar(40) NOT NULL,
  `course_desc` varchar(150) NOT NULL,
  `course_duration` int(11) NOT NULL,
  `course_fees` int(11) NOT NULL,
  `course_img` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `course_tbl`
--

INSERT INTO `course_tbl` (`course_id`, `course_title`, `course_desc`, `course_duration`, `course_fees`, `course_img`) VALUES
(-1, '', '', 0, 0, ''),
(1, 'mca', 'it subject', 5, 9000, ''),
(2, 'krisha', 'sddcdc', 4, 2000, ''),
(3, 'ba', 'arts subject', 5, 300, ''),
(4, 'mscitt', 'it course', 5, 9000, ''),
(5, 'jdjsdj', 'jdjdj', 21, 212, 'kk');

-- --------------------------------------------------------

--
-- Table structure for table `event_tbl`
--

CREATE TABLE `event_tbl` (
  `event_id` int(5) NOT NULL,
  `event_title` varchar(30) NOT NULL,
  `event_desc` varchar(150) NOT NULL,
  `event_location` varchar(100) NOT NULL,
  `event_img` varchar(100) NOT NULL,
  `event_date` date NOT NULL,
  `event_time` varchar(6) NOT NULL,
  `seminar_video` varchar(100) NOT NULL,
  `fk_course_id` varchar(5) DEFAULT '-1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `event_tbl`
--

INSERT INTO `event_tbl` (`event_id`, `event_title`, `event_desc`, `event_location`, `event_img`, `event_date`, `event_time`, `seminar_video`, `fk_course_id`) VALUES
(2, 'garba', 'jdkk', 'jfjfjfj', 'hii', '2017-12-06', '', 'hii', '2'),
(16, 'pgf', 'dg', 'dfg', 'gfg', '2018-01-31', '', 'fgv', '3'),
(22, 'd', 'dsfs', 'dsfs', 'dfs', '2018-01-04', '', 'ds', '-1'),
(25, 'a', 'a', 'a', '/images/eventimg/eventimgo9s7b31800.png', '2018-02-25', '22:22', 'q', '2');

-- --------------------------------------------------------

--
-- Table structure for table `faculty_tbl`
--

CREATE TABLE `faculty_tbl` (
  `faculty_id` int(2) NOT NULL,
  `f_email_id` varchar(50) NOT NULL,
  `f_pass` varchar(15) NOT NULL,
  `faculty_name` varchar(40) NOT NULL,
  `f_address` varchar(55) NOT NULL,
  `f_m_no` varchar(13) NOT NULL,
  `f_qalification` varchar(30) NOT NULL,
  `f_experience` varchar(8) DEFAULT NULL,
  `f_join_date` varchar(30) DEFAULT NULL,
  `f_img` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `faculty_tbl`
--

INSERT INTO `faculty_tbl` (`faculty_id`, `f_email_id`, `f_pass`, `faculty_name`, `f_address`, `f_m_no`, `f_qalification`, `f_experience`, `f_join_date`, `f_img`) VALUES
(1, 'faculty@gamil.com', '', 'faculty', 'admedabad', '123242', 'phd', '20', '3-12-10', 'assets/images/avatar/2.jpg'),
(4, 'krishu', 'bb', 'kri', 'dfcd', '11', 'dfdf', 'df', '2018-01-03', 'fdf');

-- --------------------------------------------------------

--
-- Table structure for table `feedback_tbl`
--

CREATE TABLE `feedback_tbl` (
  `feedback_id` int(11) NOT NULL,
  `feedback_title` varchar(50) NOT NULL,
  `feedback_desc` varchar(150) NOT NULL,
  `date` date NOT NULL,
  `fk_student_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `feedback_tbl`
--

INSERT INTO `feedback_tbl` (`feedback_id`, `feedback_title`, `feedback_desc`, `date`, `fk_student_id`) VALUES
(1, 'sad', 'sdfsd', '2017-12-04', 1),
(2, 'insitute', 'this insitute has suppotive faculty', '2018-01-09', 1),
(4, 'jsjs', 'jjsj', '2018-01-03', 22),
(5, 'jjjjjjj', 'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj', '2018-01-09', 22);

-- --------------------------------------------------------

--
-- Table structure for table `gallary_tbl`
--

CREATE TABLE `gallary_tbl` (
  `pic_id` int(4) NOT NULL,
  `pic_title` varchar(50) NOT NULL,
  `pic_img` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gallary_tbl`
--

INSERT INTO `gallary_tbl` (`pic_id`, `pic_title`, `pic_img`) VALUES
(1, 'jjjjjj', 'assets\\images\\awardsPenguins.jpg'),
(7, '11', '11'),
(8, 'hii', 'ds'),
(11, 'hello', 'vcb');

-- --------------------------------------------------------

--
-- Table structure for table `login_tbl`
--

CREATE TABLE `login_tbl` (
  `fk_student_id` int(11) NOT NULL,
  `fk_faculty_id` int(11) NOT NULL,
  `fk_admin_id` int(11) NOT NULL,
  `type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `news_tbl`
--

CREATE TABLE `news_tbl` (
  `news_id` int(5) NOT NULL,
  `news_title` varchar(50) NOT NULL,
  `new_desc` varchar(150) NOT NULL,
  `news_img` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `news_tbl`
--

INSERT INTO `news_tbl` (`news_id`, `news_title`, `new_desc`, `news_img`) VALUES
(1, 'institude news', 'dfdf', '111'),
(3, 'jkjkj', 'kjkjkjkj', 'jkjkjkj');

-- --------------------------------------------------------

--
-- Table structure for table `notes_tbl`
--

CREATE TABLE `notes_tbl` (
  `notes_id` int(4) NOT NULL,
  `notes_desc` varchar(150) NOT NULL,
  `notes_path` varchar(150) NOT NULL,
  `fk_course_id` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `notes_tbl`
--

INSERT INTO `notes_tbl` (`notes_id`, `notes_desc`, `notes_path`, `fk_course_id`) VALUES
(1, 'qwe', 'dwsd', 1);

-- --------------------------------------------------------

--
-- Table structure for table `qs_tbl`
--

CREATE TABLE `qs_tbl` (
  `qs_id` int(4) NOT NULL,
  `qs_title` varchar(50) DEFAULT NULL,
  `qs_desc` varchar(100) NOT NULL,
  `fk_student_id` int(6) NOT NULL,
  `date` date DEFAULT NULL,
  `fk_course_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `qs_tbl`
--

INSERT INTO `qs_tbl` (`qs_id`, `qs_title`, `qs_desc`, `fk_student_id`, `date`, `fk_course_id`) VALUES
(10, 'jajaj', 'jajajajajaja', 22, '2017-10-11', 1),
(16, 'jjjj', 'jjjj', 22, '2018-01-03', 2),
(17, 'nn', 'nnn', 22, '2018-01-24', 3),
(18, 'nana', 'nanan', 1, '2018-01-02', 1),
(19, 'nnmmnmn', 'nmnmnmnnnnnnnnnnnnnn', 1, '2018-01-03', 2),
(20, 'jjkj', 'jkjk', 22, '2018-01-24', 4),
(21, 'js', 'jk', 22, '2018-01-24', 5),
(22, 'datatype in c', 'hiiiii hellooo', 1, '2018-01-27', 4),
(28, 'tp', 'tp', 1, '2018-01-28', 2);

-- --------------------------------------------------------

--
-- Table structure for table `report_tbl`
--

CREATE TABLE `report_tbl` (
  `report_id` int(11) NOT NULL,
  `report_title` varchar(50) NOT NULL,
  `report_desc` varchar(150) NOT NULL,
  `date` date NOT NULL,
  `fk_faculty_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `report_tbl`
--

INSERT INTO `report_tbl` (`report_id`, `report_title`, `report_desc`, `date`, `fk_faculty_id`) VALUES
(1, 'sde', 'ede', '2017-12-04', 1),
(5, 'sdsa', 'sdas', '2018-01-02', 2);

-- --------------------------------------------------------

--
-- Table structure for table `stu_tbl`
--

CREATE TABLE `stu_tbl` (
  `stu_id` int(6) NOT NULL,
  `stu_email_id` varchar(100) NOT NULL,
  `pass` varchar(20) NOT NULL,
  `f_name` varchar(15) NOT NULL,
  `m_name` varchar(15) DEFAULT NULL,
  `l_name` varchar(15) NOT NULL,
  `gen` varchar(6) NOT NULL,
  `addhar_no` varchar(12) DEFAULT NULL,
  `address` varchar(100) NOT NULL,
  `m_no` int(10) NOT NULL,
  `qualification` varchar(10) NOT NULL,
  `img` varchar(100) NOT NULL,
  `dob` date NOT NULL,
  `flag` varchar(4) DEFAULT NULL,
  `fk_course_id` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stu_tbl`
--

INSERT INTO `stu_tbl` (`stu_id`, `stu_email_id`, `pass`, `f_name`, `m_name`, `l_name`, `gen`, `addhar_no`, `address`, `m_no`, `qualification`, `img`, `dob`, `flag`, `fk_course_id`) VALUES
(1, 'krishu', 'krisha', 'hiii', 'j', 'j', 'j', '3', 'kjkjkjk', 1234567891, '10', 'assets/images/avatar/3.jpg', '2017-12-08', '0', 4),
(2, 'krisha', 'krisha', 'krisha', 'a', 'a', 'j', '3', 'kjkjkjk', 1234567891, '10', '/images/stuimguiN2Z300867.png', '2017-12-07', '0', 4),
(22, 'jilayshah007@gmail.com', 'jilay', 'jilauy', 'jj', 'jj', 'jj', '123', 'ssss', 21233, 'ss', 'assets/images/avatar/3.jpg', '2018-01-18', '1', 2),
(24, 'ringwala', 'ringwala', 'ringwala', 'ringwala', 'ringwala', 'Female', '11', 'ringwala', 111, '12', '/images/stuimg/stuimgjHo3V300727.png', '2018-01-21', '0', 2),
(26, 'tmp', 'tmp', 'tmp', 'tmp', 'tmp', 'Female', '11', 'tmp', 11, 'tmp', '/images/stuimg/stuimgQeQvR21805.png', '2018-02-17', '0', 4);

-- --------------------------------------------------------

--
-- Table structure for table `subject_tbl`
--

CREATE TABLE `subject_tbl` (
  `sub_id` int(3) NOT NULL,
  `sub_title` varchar(40) NOT NULL,
  `sub_desc` varchar(150) NOT NULL,
  `fk_faculty_id` int(3) NOT NULL,
  `fk_cousre_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subject_tbl`
--

INSERT INTO `subject_tbl` (`sub_id`, `sub_title`, `sub_desc`, `fk_faculty_id`, `fk_cousre_id`) VALUES
(1, 'ba', 'arts subject', 1, 2),
(4, 'java', 'asas111', 1, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_tbl`
--
ALTER TABLE `admin_tbl`
  ADD PRIMARY KEY (`admin_email_id`);

--
-- Indexes for table `ans_tbl`
--
ALTER TABLE `ans_tbl`
  ADD PRIMARY KEY (`ans_id`);

--
-- Indexes for table `course_tbl`
--
ALTER TABLE `course_tbl`
  ADD PRIMARY KEY (`course_id`);

--
-- Indexes for table `event_tbl`
--
ALTER TABLE `event_tbl`
  ADD PRIMARY KEY (`event_id`);

--
-- Indexes for table `faculty_tbl`
--
ALTER TABLE `faculty_tbl`
  ADD PRIMARY KEY (`faculty_id`);

--
-- Indexes for table `feedback_tbl`
--
ALTER TABLE `feedback_tbl`
  ADD PRIMARY KEY (`feedback_id`);

--
-- Indexes for table `gallary_tbl`
--
ALTER TABLE `gallary_tbl`
  ADD PRIMARY KEY (`pic_id`);

--
-- Indexes for table `news_tbl`
--
ALTER TABLE `news_tbl`
  ADD PRIMARY KEY (`news_id`);

--
-- Indexes for table `notes_tbl`
--
ALTER TABLE `notes_tbl`
  ADD PRIMARY KEY (`notes_id`);

--
-- Indexes for table `qs_tbl`
--
ALTER TABLE `qs_tbl`
  ADD PRIMARY KEY (`qs_id`);

--
-- Indexes for table `report_tbl`
--
ALTER TABLE `report_tbl`
  ADD PRIMARY KEY (`report_id`);

--
-- Indexes for table `stu_tbl`
--
ALTER TABLE `stu_tbl`
  ADD PRIMARY KEY (`stu_id`);

--
-- Indexes for table `subject_tbl`
--
ALTER TABLE `subject_tbl`
  ADD PRIMARY KEY (`sub_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ans_tbl`
--
ALTER TABLE `ans_tbl`
  MODIFY `ans_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `course_tbl`
--
ALTER TABLE `course_tbl`
  MODIFY `course_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `event_tbl`
--
ALTER TABLE `event_tbl`
  MODIFY `event_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `faculty_tbl`
--
ALTER TABLE `faculty_tbl`
  MODIFY `faculty_id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `feedback_tbl`
--
ALTER TABLE `feedback_tbl`
  MODIFY `feedback_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `gallary_tbl`
--
ALTER TABLE `gallary_tbl`
  MODIFY `pic_id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `news_tbl`
--
ALTER TABLE `news_tbl`
  MODIFY `news_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `notes_tbl`
--
ALTER TABLE `notes_tbl`
  MODIFY `notes_id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `qs_tbl`
--
ALTER TABLE `qs_tbl`
  MODIFY `qs_id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `report_tbl`
--
ALTER TABLE `report_tbl`
  MODIFY `report_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `stu_tbl`
--
ALTER TABLE `stu_tbl`
  MODIFY `stu_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `subject_tbl`
--
ALTER TABLE `subject_tbl`
  MODIFY `sub_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
