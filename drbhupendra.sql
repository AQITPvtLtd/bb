-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 20, 2024 at 09:07 AM
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
-- Database: `drbhupendra`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `id` int(11) NOT NULL,
  `img` varchar(200) NOT NULL,
  `heading` varchar(200) NOT NULL,
  `date` varchar(200) NOT NULL,
  `content` varchar(7000) NOT NULL,
  `shortcontent` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`id`, `img`, `heading`, `date`, `content`, `shortcontent`) VALUES
(1, 'img1.webp', 'A Comprehensive Guide to Spine Tumors – Types, Symptoms, and Cutting-Edge Treatments', '14 Aug 2024', '<div class=\"p-6 bg-white rounded-lg shadow-lg\">\r\n  <h2 class=\"text-2xl font-bold text-gray-800 mb-4\">Spine Tumors</h2>\r\n  <p class=\"text-gray-700 leading-relaxed\">\r\n    Spine tumors can be primary, meaning they start in the spine, or metastatic, meaning they result from cancers that originate in other parts of the body and spread or metastasize to the spine. Many types of cancer have the potential to metastasize to the spine.\r\n  </p>\r\n\r\n  <h3 class=\"text-xl font-semibold text-gray-800 mt-6 mb-2\">Spine Tumor Causes and Risk Factors</h3>\r\n  <p class=\"text-gray-700 leading-relaxed\">\r\n    The risk of developing a primary spine tumor is very low. The causes are still largely unknown — other than random gene mutations that are not inherited. The only correlation that has been made is that exposure to radiation therapy from treatment for an early childhood cancer may bring a spinal tumor into play 20 or 30 years after treatment.\r\n  </p>\r\n\r\n  <h3 class=\"text-xl font-semibold text-gray-800 mt-6 mb-2\">Spine Tumor Symptoms</h3>\r\n  <p class=\"text-gray-700 leading-relaxed\">Symptoms of spinal cancer include:</p>\r\n  <ul class=\"list-disc list-inside text-gray-700 leading-relaxed\">\r\n    <li>Disruptions in your motor functions — problems sitting, standing, walking, and running</li>\r\n    <li>Difficulties with fine motor skills like writing or drawing — tasks that use the small muscles of the hands and wrists.</li>\r\n  </ul>\r\n\r\n  <h3 class=\"text-xl font-semibold text-gray-800 mt-6 mb-2\">Types of Spine Tumors</h3>\r\n  <p class=\"text-gray-700 leading-relaxed\">\r\n    Spine tumors are classified based on whether they grow in the spinal cord or in the dura — the protective covering of the spinal cord and nerves.\r\n  </p>\r\n  <ul class=\"list-disc list-inside text-gray-700 leading-relaxed\">\r\n    <li><strong>Astrocytomas:</strong> Spinal astrocytomas are sometimes benign, are slow-growing and don’t spread outside of the spine.</li>\r\n    <li><strong>Ependymomas:</strong> Spinal ependymomas are primary tumors that arise within the spinal cord. They tend to be benign and slow-growing.</li>\r\n  </ul>\r\n\r\n  <h3 class=\"text-xl font-semibold text-gray-800 mt-6 mb-2\">Spinal Tumors Treatment</h3>\r\n  <p class=\"text-gray-700 leading-relaxed\">\r\n    The treatment approach for spinal cancer and tumors varies based on factors like tumor type and aggressiveness. Treatment options may include:\r\n  </p>\r\n  <ul class=\"list-disc list-inside text-gray-700 leading-relaxed\">\r\n    <li><strong>Chemotherapy:</strong> The use of drugs to target and kill cancer cells.</li>\r\n    <li><strong>Radiation therapy:</strong> This includes advanced techniques like targeted proton therapy.</li>\r\n    <li><strong>Surgery:</strong> Full or partial removal of the tumor through surgical procedures.</li>\r\n    <li><strong>Steroids:</strong> Prescribed to alleviate swelling and back pain associated with spinal tumors.</li>\r\n  </ul>\r\n\r\n  <h3 class=\"text-xl font-semibold text-gray-800 mt-6 mb-2\">Conclusion</h3>\r\n  <p class=\"text-gray-700 leading-relaxed\">\r\n    Symptoms of spinal tumors often manifest as disruptions in motor functions, impacting activities such as sitting, standing, walking, and fine motor skills like writing or drawing. It is crucial to recognize these signs for early diagnosis and intervention.\r\n  </p>\r\n\r\n  <h3 class=\"text-xl font-semibold text-gray-800 mt-6 mb-4\">Frequently Asked Questions (FAQs) about Spine Tumors:</h3>\r\n  <div class=\"space-y-4\">\r\n    <div>\r\n      <h4 class=\"text-lg font-semibold text-gray-800\">1. What are spine tumors?</h4>\r\n      <p class=\"text-gray-700 leading-relaxed\">\r\n        Spine tumors can be either primary (originating in the spine) or metastatic (resulting from cancers that spread to the spine from other parts of the body). Various types of cancer have the potential to metastasize to the spine.\r\n      </p>\r\n    </div>\r\n\r\n    <div>\r\n      <h4 class=\"text-lg font-semibold text-gray-800\">2. What causes spine tumors?</h4>\r\n      <p class=\"text-gray-700 leading-relaxed\">\r\n        The causes of primary spine tumors are largely unknown, but they may result from random gene mutations that are not inherited. Exposure to radiation therapy during childhood cancer treatment has been correlated with an increased risk of developing spinal tumors later in life.\r\n      </p>\r\n    </div>\r\n\r\n    <div>\r\n      <h4 class=\"text-lg font-semibold text-gray-800\">3. What are the symptoms of spinal tumors?</h4>\r\n      <p class=\"text-gray-700 leading-relaxed\">\r\n        Symptoms include disruptions in motor functions, leading to problems with sitting, standing, walking, and running. Additionally, difficulties with fine motor skills such as writing or drawing may occur.\r\n      </p>\r\n    </div>\r\n\r\n    <div>\r\n      <h4 class=\"text-lg font-semibold text-gray-800\">4. What are the risk factors for spine tumors?</h4>\r\n      <p class=\"text-gray-700 leading-relaxed\">\r\n        The risk of developing primary spine tumors is very low. Radiation therapy during early childhood cancer treatment is a potential risk factor, with spinal tumors manifesting 20 or 30 years after the therapy.\r\n      </p>\r\n    </div>\r\n\r\n    <div>\r\n      <h4 class=\"text-lg font-semibold text-gray-800\">5. How are spine tumors classified?</h4>\r\n      <p class=\"text-gray-700 leading-relaxed\">\r\n        Spine tumors are classified based on whether they grow in the spinal cord or in the dura, the protective covering of the spinal cord and nerves. Examples include astrocytomas, which are sometimes benign and slow-growing, and ependymomas, which tend to be benign and slow-growing primary tumors within the spinal cord.\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n', 'Spine tumors can be primary, meaning they start in the spine, or metastatic, meaning they result from cancers that originate in other parts of the body and spread or metastasize to the spine. Many typ');

-- --------------------------------------------------------

--
-- Table structure for table `form`
--

CREATE TABLE `form` (
  `id` varchar(200) NOT NULL,
  `name` varchar(200) NOT NULL,
  `Email` varchar(200) NOT NULL,
  `Phone` varchar(200) NOT NULL,
  `Query` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
