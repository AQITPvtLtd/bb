-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 06, 2024 at 06:14 AM
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
  `date` varchar(50) NOT NULL,
  `content` text NOT NULL,
  `shortcontent` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`id`, `img`, `heading`, `date`, `content`, `shortcontent`) VALUES
(2, 'img2.png', 'Spine fracture', '12-09-2024', ' <p style=\"margin: 5px 0; padding: 5px 0; font-size: 24px; font-family: \'Times New Roman\', serif;\">\r\n        Spine tumors are abnormal growths that develop in or around the spinal cord and vertebrae. They can be benign\r\n        (non-cancerous) or malignant (cancerous) and may originate from the spine itself or spread (metastasize) from\r\n        other\r\n        parts of the body.\r\n    </p>\r\n\r\n    <p\r\n        style=\"margin: 5px 0; padding: 5px 0; font-size: 30px; font-family: \'Times New Roman\', serif; font-weight: bold;\">\r\n        Types of Spine Tumors:\r\n    </p>\r\n\r\n    <ol\r\n        style=\"margin: 5px; padding: 5px; font-size: 24px; font-family: \'Times New Roman\', serif; list-style-type: decimal;\">\r\n        <li>\r\n            <strong>Vertebral Column Tumors:</strong> Affect the bones of the spine (vertebrae), which can be either\r\n            primary\r\n            (like osteosarcomas).\r\n        </li>\r\n        <li>\r\n            <strong>Metastatic tumor:</strong> A metastatic tumor of the spine refers to cancer that has spread\r\n            (metastasized)\r\n            from another part of the body to the bones of the spine or the spinal cord. The spine is one of the most\r\n            common sites\r\n            for bone metastasis, and cancers of the breast, lung, prostate, kidney, and thyroid are most likely to\r\n            spread to the\r\n            spine.\r\n        </li>\r\n    </ol>\r\n\r\n    <p\r\n        style=\"margin: 5px 0; padding: 5px 0; font-size: 28px; font-family: \'Times New Roman\', serif; font-weight: bold;\">\r\n        Common Characteristics:\r\n    </p>\r\n\r\n    <ol\r\n        style=\"margin: 5px; padding: 5px; font-size: 24px; font-family: \'Times New Roman\', serif; list-style-type: deciaml;\">\r\n        <li>\r\n            <strong>Location:</strong> Metastases usually occur in the vertebrae (bones of the spine) rather than the\r\n            spinal\r\n            cord itself. The thoracic spine is the most commonly affected region, followed by the lumbar and cervical\r\n            regions.\r\n        </li>\r\n        <li>\r\n            <strong>Multiple Lesions:</strong> It is common for metastatic spine tumors to present as multiple lesions\r\n            across\r\n            several vertebrae.\r\n        </li>\r\n        <li>\r\n            <strong>Intramedullary Tumors:</strong> Develop inside the spinal cord, often gliomas or astrocytomas.\r\n        </li>\r\n        <li>\r\n            <strong>Extramedullary Tumors:</strong> Grow outside the spinal cord but within its protective covering.\r\n            These\r\n            include meningiomas and schwannomas.\r\n        </li>\r\n    </ol>\r\n\r\n    <p\r\n        style=\"margin: 5px 0; padding: 5px 0; font-size: 30px; font-family: \'Times New Roman\', serif; font-weight: bold;\">\r\n        Symptoms:\r\n    </p>\r\n\r\n    <ol\r\n        style=\"margin: 5px; padding: 5px; font-size: 24px; font-family: \'Times New Roman\', serif; list-style-type: decimal;\">\r\n        <li>\r\n            <strong>Pain:</strong> Commonly in the back, neck, or at the site of the tumor, and can worsen with movement\r\n            or at\r\n            night.\r\n        </li>\r\n        <li>\r\n            <strong>Neurological Deficits:</strong> Numbness, weakness, difficulty walking, or loss of sensation.\r\n        </li>\r\n        <li>\r\n            <strong>Bowel or Bladder Dysfunction:</strong> Especially with tumors compressing the spinal cord.\r\n        </li>\r\n    </ol>\r\n\r\n    <p\r\n        style=\"margin: 5px 0; padding: 5px 0; font-size: 30px; font-family: \'Times New Roman\', serif; font-weight: bold;\">\r\n        Diagnosis:\r\n    </p>\r\n\r\n    <ol style=\"margin: 5px; font-size: 24px; font-family: \'Times New Roman\', serif; list-style-type: decimal;\">\r\n        <div>\r\n            <li>\r\n                <strong>Imaging:</strong>\r\n            </li>\r\n\r\n            <ul style=\"margin: 5px; padding: 5px; font-family: \'Times New Roman\', serif; list-style-type: circle;\">\r\n                <li style=\"margin: 10px; font-size: 24px; font-family: \'Times New Roman\' , serif;\">\r\n\r\n                    <strong>MRI:</strong> Usually the primary investigation and commonly used to detect spine tumors.\r\n\r\n                </li>\r\n                <li style=\"margin: 10px; font-size: 24px; font-family: \'Times New Roman\', serif;\">\r\n\r\n                    <strong> PET CT scan:</strong> Identifies the presence of multiple metastatic sites.\r\n\r\n                </li>\r\n                <li style=\"margin: 10px; font-size: 24px; font-family: \'Times New Roman\', serif;\">\r\n\r\n                    <strong> CT scan:</strong> Usually for detailed study and surgical planning.\r\n\r\n                </li>\r\n            </ul>\r\n\r\n        </div>\r\n\r\n        <div>\r\n\r\n            <li>\r\n                <strong>Biopsy:</strong> A tissue sample may be taken to determine if the tumor is benign or\r\n                malignant. In\r\n                the case\r\n                of spine vertebral tumors, it can be done as a transpedicular biopsy usually under local\r\n                anesthesia/GA or a\r\n                CT-guided biopsy.\r\n            </li>\r\n\r\n        </div>\r\n    </ol>\r\n\r\n    <p\r\n        style=\"margin: 5px 0; padding: 5px 0; font-size: 30px; font-family: \'Times New Roman\', serif; font-weight: bold;\">\r\n        Treatment:\r\n    </p>\r\n\r\n    <p style=\"margin: 5px 0; padding: 5px 0; font-size: 24px; font-family: \'Times New Roman\', serif;\">\r\n        The goals of treatment for metastatic spinal tumors are often to relieve pain, improve or preserve neurological\r\n        function, and maintain spinal stability. The treatment plan depends on the type and stage of the primary cancer,\r\n        the\r\n        extent of metastasis, and the patient\'s overall health.\r\n    </p>\r\n\r\n    <ol\r\n        style=\"margin: 5px; padding: 5px; font-size: 24px; font-family: \'Times New Roman\', serif; list-style-type: decimal;\">\r\n        <li>\r\n            <strong>Medications:</strong>\r\n            <ul\r\n                style=\"margin: 5px; padding: 5px; font-size: 24px; font-family: \'Times New Roman\', serif; list-style-type: circle;\">\r\n                <li><strong>Bisphosphonates</strong> and <strong>Denosumab:</strong> Help reduce bone destruction.</li>\r\n                <li><strong>Corticosteroids:</strong> Can reduce swelling and help with spinal cord compression.</li>\r\n                <li><strong>Pain Management:</strong> Narcotics or other medications for symptom relief.</li>\r\n            </ul>\r\n        </li>\r\n        <li><strong>Radiation Therapy:</strong> Used to shrink or eliminate tumors that can\'t be fully removed\r\n            surgically.</li>\r\n        <li><strong>Chemotherapy:</strong> More often used for malignant tumors.</li>\r\n        <li><strong>Targeted Therapy:</strong> For specific types of cancer, such as metastatic tumors.</li>\r\n        <li><strong>Surgery:</strong> Often used to remove as much of the tumor as possible. Surgery is needed in case\r\n            of neurological deficit, severe pain, or to provide structural support to the vertebral column.\r\n        </li>\r\n        <ul style=\"margin: 5px; padding: 5px; font-size: 24px; font-family: \'Times New Roman\', serif; \">\r\n            <li>\r\n                <strong>Vertebroplasty/Kyphoplasty:</strong> Minimally invasive techniques that inject cement into the\r\n                spine to\r\n                stabilize weakened vertebrae. These techniques stabilize the spine immediately and can also obtain\r\n                samples for\r\n                biopsy simultaneously.\r\n            </li>\r\n        </ul>\r\n    </ol>\r\n\r\n    <p style=\"margin: 5px 0; padding: 5px 0; font-size: 24px; font-family: \'Times New Roman\', serif;\">\r\n        The approach to treatment depends on the type of tumor, its location, and whether it is affecting spinal\r\n        stability or\r\n        neurological function.\r\n    </p>\r\n\r\n    <p style=\"margin: 5px 0; font-size: 30px; font-family: \'Times New Roman\', serif; font-weight: bold;\">\r\n        Prognosis:\r\n    </p>\r\n\r\n    <p style=\"margin: 5px 0; padding: 5px 0; font-size: 24px; font-family: \'Times New Roman\', serif;\">\r\n        The prognosis of metastatic spine tumors varies widely based on the type of primary cancer, the extent of\r\n        metastasis,\r\n        and the response to treatment. While metastatic spine tumors are generally not curable, early detection and\r\n        appropriate\r\n        treatment can improve quality of life and prevent serious complications like paralysis.\r\n    </p>', 'Spine fracture- Spine fracture is a serious issues and defined as break in vertebrae\r\nand can affect the life like any other fracture.\r\n'),
(3, 'img3.png', 'Spine Tumors ', '23-09-2024', ' <p style=\"margin: 5px 0; padding: 5px 0; font-size: 24px; font-family: \'Times New Roman\', serif;\">\r\n        Spine tumors are abnormal growths that develop in or around the spinal cord and vertebrae. They can be benign\r\n        (non-cancerous) or malignant (cancerous) and may originate from the spine itself or spread (metastasize) from\r\n        other\r\n        parts of the body.\r\n    </p>\r\n\r\n    <p\r\n        style=\"margin: 5px 0; padding: 5px 0; font-size: 30px; font-family: \'Times New Roman\', serif; font-weight: bold;\">\r\n        Types of Spine Tumors:\r\n    </p>\r\n\r\n    <ol\r\n        style=\"margin: 5px; padding: 5px; font-size: 24px; font-family: \'Times New Roman\', serif; list-style-type: decimal;\">\r\n        <li>\r\n            <strong>Vertebral Column Tumors:</strong> Affect the bones of the spine (vertebrae), which can be either\r\n            primary\r\n            (like osteosarcomas).\r\n        </li>\r\n        <li>\r\n            <strong>Metastatic tumor:</strong> A metastatic tumor of the spine refers to cancer that has spread\r\n            (metastasized)\r\n            from another part of the body to the bones of the spine or the spinal cord. The spine is one of the most\r\n            common sites\r\n            for bone metastasis, and cancers of the breast, lung, prostate, kidney, and thyroid are most likely to\r\n            spread to the\r\n            spine.\r\n        </li>\r\n    </ol>\r\n\r\n    <p\r\n        style=\"margin: 5px 0; padding: 5px 0; font-size: 28px; font-family: \'Times New Roman\', serif; font-weight: bold;\">\r\n        Common Characteristics:\r\n    </p>\r\n\r\n    <ol\r\n        style=\"margin: 5px; padding: 5px; font-size: 24px; font-family: \'Times New Roman\', serif; list-style-type: deciaml;\">\r\n        <li>\r\n            <strong>Location:</strong> Metastases usually occur in the vertebrae (bones of the spine) rather than the\r\n            spinal\r\n            cord itself. The thoracic spine is the most commonly affected region, followed by the lumbar and cervical\r\n            regions.\r\n        </li>\r\n        <li>\r\n            <strong>Multiple Lesions:</strong> It is common for metastatic spine tumors to present as multiple lesions\r\n            across\r\n            several vertebrae.\r\n        </li>\r\n        <li>\r\n            <strong>Intramedullary Tumors:</strong> Develop inside the spinal cord, often gliomas or astrocytomas.\r\n        </li>\r\n        <li>\r\n            <strong>Extramedullary Tumors:</strong> Grow outside the spinal cord but within its protective covering.\r\n            These\r\n            include meningiomas and schwannomas.\r\n        </li>\r\n    </ol>\r\n\r\n    <p\r\n        style=\"margin: 5px 0; padding: 5px 0; font-size: 30px; font-family: \'Times New Roman\', serif; font-weight: bold;\">\r\n        Symptoms:\r\n    </p>\r\n\r\n    <ol\r\n        style=\"margin: 5px; padding: 5px; font-size: 24px; font-family: \'Times New Roman\', serif; list-style-type: decimal;\">\r\n        <li>\r\n            <strong>Pain:</strong> Commonly in the back, neck, or at the site of the tumor, and can worsen with movement\r\n            or at\r\n            night.\r\n        </li>\r\n        <li>\r\n            <strong>Neurological Deficits:</strong> Numbness, weakness, difficulty walking, or loss of sensation.\r\n        </li>\r\n        <li>\r\n            <strong>Bowel or Bladder Dysfunction:</strong> Especially with tumors compressing the spinal cord.\r\n        </li>\r\n    </ol>\r\n\r\n    <p\r\n        style=\"margin: 5px 0; padding: 5px 0; font-size: 30px; font-family: \'Times New Roman\', serif; font-weight: bold;\">\r\n        Diagnosis:\r\n    </p>\r\n\r\n    <ol style=\"margin: 5px; font-size: 24px; font-family: \'Times New Roman\', serif; list-style-type: decimal;\">\r\n        <div>\r\n            <li>\r\n                <strong>Imaging:</strong>\r\n            </li>\r\n\r\n            <ul style=\"margin: 5px; padding: 5px; font-family: \'Times New Roman\', serif; list-style-type: circle;\">\r\n                <li style=\"margin: 5px; padding: 5px; font-size: 24px; font-family: \'Times New Roman\' , serif;\">\r\n\r\n                    <strong>MRI:</strong> Usually the primary investigation and commonly used to detect spine tumors.\r\n\r\n                </li>\r\n                <li style=\"margin: 5px; padding: 5px; font-size: 24px; font-family: \'Times New Roman\', serif;\">\r\n\r\n                    <strong> PET CT scan:</strong> Identifies the presence of multiple metastatic sites.\r\n\r\n                </li>\r\n                <li style=\"margin: 5px; padding: 5px; font-size: 24px; font-family: \'Times New Roman\', serif;\">\r\n\r\n                    <strong> CT scan:</strong> Usually for detailed study and surgical planning.\r\n\r\n                </li>\r\n            </ul>\r\n\r\n        </div>\r\n\r\n        <div>\r\n\r\n            <li>\r\n                <strong>Biopsy:</strong> A tissue sample may be taken to determine if the tumor is benign or\r\n                malignant. In\r\n                the case\r\n                of spine vertebral tumors, it can be done as a transpedicular biopsy usually under local\r\n                anesthesia/GA or a\r\n                CT-guided biopsy.\r\n            </li>\r\n\r\n        </div>\r\n    </ol>\r\n\r\n    <p\r\n        style=\"margin: 5px 0; padding: 5px 0; font-size: 30px; font-family: \'Times New Roman\', serif; font-weight: bold;\">\r\n        Treatment:\r\n    </p>\r\n\r\n    <p style=\"margin: 5px 0; padding: 5px 0; font-size: 24px; font-family: \'Times New Roman\', serif;\">\r\n        The goals of treatment for metastatic spinal tumors are often to relieve pain, improve or preserve neurological\r\n        function, and maintain spinal stability. The treatment plan depends on the type and stage of the primary cancer,\r\n        the\r\n        extent of metastasis, and the patient\'s overall health.\r\n    </p>\r\n\r\n    <ol\r\n        style=\"margin: 5px; padding: 5px; font-size: 24px; font-family: \'Times New Roman\', serif; list-style-type: decimal;\">\r\n        <li>\r\n            <strong>Medications:</strong>\r\n            <ul\r\n                style=\"margin: 5px; padding: 5px; font-size: 24px; font-family: \'Times New Roman\', serif; list-style-type: circle;\">\r\n                <li><strong>Bisphosphonates</strong> and <strong>Denosumab:</strong> Help reduce bone destruction.</li>\r\n                <li><strong>Corticosteroids:</strong> Can reduce swelling and help with spinal cord compression.</li>\r\n                <li><strong>Pain Management:</strong> Narcotics or other medications for symptom relief.</li>\r\n            </ul>\r\n        </li>\r\n        <li><strong>Radiation Therapy:</strong> Used to shrink or eliminate tumors that can\'t be fully removed\r\n            surgically.</li>\r\n        <li><strong>Chemotherapy:</strong> More often used for malignant tumors.</li>\r\n        <li><strong>Targeted Therapy:</strong> For specific types of cancer, such as metastatic tumors.</li>\r\n        <li><strong>Surgery:</strong> Often used to remove as much of the tumor as possible. Surgery is needed in case\r\n            of neurological deficit, severe pain, or to provide structural support to the vertebral column.\r\n        </li>\r\n        <ul style=\"margin: 5px; padding: 5px; font-size: 24px; font-family: \'Times New Roman\', serif; list-style-type: circle \">\r\n            <li>\r\n                <strong>Vertebroplasty/Kyphoplasty:</strong> Minimally invasive techniques that inject cement into the\r\n                spine to\r\n                stabilize weakened vertebrae. These techniques stabilize the spine immediately and can also obtain\r\n                samples for\r\n                biopsy simultaneously.\r\n            </li>\r\n        </ul>\r\n    </ol>\r\n\r\n    <p style=\"margin: 5px 0; padding: 5px 0; font-size: 24px; font-family: \'Times New Roman\', serif;\">\r\n        The approach to treatment depends on the type of tumor, its location, and whether it is affecting spinal\r\n        stability or\r\n        neurological function.\r\n    </p>\r\n\r\n    <p style=\"margin: 5px 0; font-size: 30px; font-family: \'Times New Roman\', serif; font-weight: bold;\">\r\n        Prognosis:\r\n    </p>\r\n\r\n    <p style=\"margin: 5px 0; padding: 5px 0; font-size: 24px; font-family: \'Times New Roman\', serif;\">\r\n        The prognosis of metastatic spine tumors varies widely based on the type of primary cancer, the extent of\r\n        metastasis,\r\n        and the response to treatment. While metastatic spine tumors are generally not curable, early detection and\r\n        appropriate\r\n        treatment can improve quality of life and prevent serious complications like paralysis.\r\n    </p>', 'Spine tumors are abnormal growths that develop in or around the spinal cord and vertebrae. They can be benign (non-cancerous) or malignant (cancerous) and may originate from the spine itself or spread');

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

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE `testimonials` (
  `id` int(11) NOT NULL,
  `src` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `testimonials`
--

INSERT INTO `testimonials` (`id`, `src`) VALUES
(1, 'https://www.youtube.com/embed/7xhSY2B1mZY?si=DQKlRNa892eA3pEi'),
(2, 'https://www.youtube.com/embed/w4j6SdpJZdw?si=jsswGKi5E5s_Ym9T'),
(3, 'https://www.youtube.com/embed/97cH5u8vxO4'),
(4, 'https://www.youtube.com/embed/SdgTR_uw8uE?si=p20Ry9OqR3Mo4QVr');

-- --------------------------------------------------------

--
-- Table structure for table `video_gallery`
--

CREATE TABLE `video_gallery` (
  `id` int(11) NOT NULL,
  `src` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `video_gallery`
--

INSERT INTO `video_gallery` (`id`, `src`) VALUES
(1, 'https://www.youtube.com/embed/7xhSY2B1mZY?si=DQKlRNa892eA3pEi'),
(2, 'https://www.youtube.com/embed/yo9SbaGEWzM?si=4Et6_9-lUvmU2hH3'),
(3, 'https://www.youtube.com/embed/w4j6SdpJZdw?si=jsswGKi5E5s_Ym9T'),
(4, 'https://www.youtube.com/embed/SdgTR_uw8uE?si=p20Ry9OqR3Mo4QVr'),
(5, 'https://www.youtube.com/embed/kWhXaBhSQh8?si=f0D4rVRpjrFLVESW'),
(6, 'https://www.youtube.com/embed/Sx_f1O9-_Ng?si=L3SozFRIgCRtyoHR'),
(7, 'https://www.youtube.com/embed/97cH5u8vxO4'),
(8, 'https://www.youtube.com/embed/gsLLcB8OfVU?si=mGKCC4WBke5aUYov');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimonials`
--
ALTER TABLE `testimonials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `video_gallery`
--
ALTER TABLE `video_gallery`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
