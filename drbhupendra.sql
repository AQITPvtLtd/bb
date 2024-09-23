-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 23, 2024 at 03:00 PM
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
(2, 'img2.png', 'Spine fracture', '12-09-2024', '<div class=\"blog-post\">\r\n  <h1 class=\"text-3xl font-bold mb-4\">Spine Fracture</h1>\r\n  <p class=\"text-lg mb-4\">A spine fracture is a serious issue and is defined as a break in the vertebrae, which can affect life similarly to any other fracture.</p>\r\n\r\n  <h2 class=\"text-2xl font-bold mb-4\">Symptoms</h2>\r\n  <p class=\"text-lg mb-4\">Patients with spine fractures usually present with the following symptoms:</p>\r\n  <ul class=\"list-disc pl-5 mb-6\">\r\n    <li><strong>Back pain –</strong> Most common complaint</li>\r\n    <li><strong>Difficulty to sit, stand, or walk</strong></li>\r\n    <li><strong>Sciatica-like pain in limbs –</strong> Radicular pain, tingling, numbness</li>\r\n    <li><strong>Weakness in limbs</strong></li>\r\n    <li><strong>Bladder/Bowel involvement –</strong> Incontinence</li>\r\n    <li><strong>Spinal deformity and change in posture –</strong> Usually in the case of untreated fractures</li>\r\n  </ul>\r\n\r\n  <h2 class=\"text-2xl font-bold mb-4\">Causes</h2>\r\n  <ul class=\"list-disc pl-5 mb-6\">\r\n    <li><strong>In young patients –</strong> Usually due to high-impact injuries like road traffic accidents, falls from heights, or sports injuries.</li>\r\n    <li><strong>In older patients –</strong> Osteoporosis is the leading cause, as low bone density makes bones vulnerable to fractures. Even trivial trauma like leaning forward or sneezing may cause spine fractures.</li>\r\n    <li><strong>Associated causes –</strong></li>\r\n    <ul class=\"list-disc pl-10\">\r\n      <li>Tumors – Often metastatic</li>\r\n      <li>Drug-induced – Long-term steroid consumption</li>\r\n    </ul>\r\n  </ul>\r\n\r\n  <h2 class=\"text-2xl font-bold mb-4\">Diagnosis</h2>\r\n  <p class=\"text-lg mb-4\">Diagnosis is based on clinical examination and various investigations, including:</p>\r\n  <ul class=\"list-disc pl-5 mb-6\">\r\n    <li><strong>MRI –</strong> The investigation of choice</li>\r\n    <li>X-rays and CT scans</li>\r\n    <li><strong>Bone Density –</strong> BMD or DEXA scan to quantify osteoporosis</li>\r\n  </ul>\r\n\r\n  <h2 class=\"text-2xl font-bold mb-4\">Management</h2>\r\n  <p class=\"text-lg mb-4\">The management of spine fractures depends on the following factors:</p>\r\n  <ol class=\"list-decimal pl-5 mb-6\">\r\n    <li>Cause of the fracture</li>\r\n    <li>Type of fracture</li>\r\n    <li>Site of the fracture</li>\r\n  </ol>\r\n  <p class=\"text-lg mb-4\">Most spine fractures do not require surgery and can be managed conservatively (non-surgically) with:</p>\r\n  <ul class=\"list-disc pl-5 mb-6\">\r\n    <li>Pain management with medication</li>\r\n    <li><strong>Bracing –</strong> Supports the back, improves overall strength, and prevents further collapse of the fracture</li>\r\n    <li><strong>Physical therapy –</strong> Helps maintain joint flexibility and prevent chest-related issues while the patient is bedridden</li>\r\n    <li><strong>Treatment of associated factors –</strong> Such as osteoporosis</li>\r\n  </ul>\r\n\r\n  <h2 class=\"text-2xl font-bold mb-4\">Surgery</h2>\r\n  <p class=\"text-lg mb-4\">Surgery is usually considered when:</p>\r\n  <ul class=\"list-disc pl-5 mb-6\">\r\n    <li>Conservative treatment fails</li>\r\n    <li>Pain and disability increase despite conservative treatment</li>\r\n    <li>Nerve compression causes weakness in limbs or bladder/bowel incontinence</li>\r\n    <li>Spinal deformity is present</li>\r\n  </ul>\r\n\r\n  <h2 class=\"text-2xl font-bold mb-4\">Types of Surgery</h2>\r\n  <ul class=\"list-disc pl-5 mb-6\">\r\n    <li><strong>In young patients –</strong> Spinal fixation with or without decompression of neural elements</li>\r\n    <li><strong>In older patients –</strong> Cementing of the affected vertebrae (Balloon kyphoplasty/vertebroplasty), a minimally invasive procedure with <strong><u class=\"text-blue-600\">maximum benefit and minimal intervention</u></strong></li>\r\n  </ul>\r\n  <p class=\"text-lg mb-4\">In some cases, spinal fixation may also be necessary along with cementing.</p>\r\n</div>\r\n', 'Spine fracture- Spine fracture is a serious issues and defined as break in vertebrae\r\nand can affect the life like any other fracture.\r\n'),
(3, 'img3.png', 'Spine Tumors ', '23-09-2024', '<p style=\'margin:5px 0;padding:5px 0;font-size:24px;font-family:\"Times New Roman\",serif;\'>\r\n        Spine tumors are abnormal growths that develop in or around the spinal\r\n        cord and vertebrae. They can be benign (non-cancerous) or malignant\r\n        (cancerous) and may originate from the spine itself or spread\r\n        (metastasize) from other parts of the body.\r\n      </p>\r\n\r\n      <p style=\'margin:5px 0;padding:5px 0;font-size:30px;font-family:\"Times New Roman\",serif;font-weight:bold;\'>\r\n        Types of Spine Tumors:\r\n      </p>\r\n      <ol style=\"margin:5px;padding:5px;font-size:24px;font-family:\'Times New Roman\',serif; list-style-type: circle;\">\r\n        <li>\r\n          <strong>Vertebral Column Tumors:</strong> Affect the bones of the\r\n          spine (vertebrae), which can be either primary (like osteosarcomas)\r\n        </li>\r\n        <li>\r\n          <strong>Metastatic tumor:</strong> A metastatic tumor of the spine\r\n          refers to cancer that has spread (metastasized) from another part of\r\n          the body to the bones of the spine or the spinal cord. The spine is\r\n          one of the most common sites for bone metastasis, and cancers of the\r\n          breast, lung, prostate, kidney, and thyroid are most likely to spread\r\n          to the spine.\r\n        </li>\r\n      </ol>\r\n\r\n      <p style=\'margin:5px 0;padding:5px 0;font-size:28px;font-family:\"Times New Roman\",serif;font-weight:bold;\'>\r\n        Common Characteristics:\r\n      </p>\r\n      <ul style=\"margin:5px;padding:5px;font-size:24px;font-family:\'Times New Roman\',serif; list-style-type: circle;\">\r\n        <li>\r\n          <strong>Location:</strong> Metastases usually occur in the vertebrae\r\n          (bones of the spine) rather than the spinal cord itself. The thoracic\r\n          spine is the most commonly affected region, followed by the lumbar and\r\n          cervical regions.\r\n        </li>\r\n        <li>\r\n          <strong>Multiple Lesions:</strong> It is common for metastatic spine\r\n          tumors to present as multiple lesions across several vertebrae\r\n        </li>\r\n        <li>\r\n          <strong>Intramedullary Tumors:</strong> Develop inside the spinal\r\n          cord, often gliomas or astrocytomas.\r\n        </li>\r\n        <li>\r\n          <strong>Extramedullary Tumors:</strong> Grow outside the spinal cord\r\n          but within its protective covering. These include meningiomas and\r\n          schwannomas.\r\n        </li>\r\n      </ul>\r\n\r\n      <p style=\'margin:5px 0;padding:5px 0;font-size:30px;font-family:\"Times New Roman\",serif;font-weight:bold;\'>\r\n        Symptoms:\r\n      </p>\r\n      <ul style=\"margin:5px;padding:5px;font-size:24px;font-family:\'Times New Roman\',serif; list-style-type: circle;\">\r\n        <li>\r\n          <strong>Pain:</strong> Commonly in the back, neck, or at the site of\r\n          the tumor, and can worsen with movement or at night.\r\n        </li>\r\n        <li>\r\n          <strong>Neurological Deficits:</strong> Numbness, weakness, difficulty\r\n          walking, or loss of sensation.\r\n        </li>\r\n        <li>\r\n          <strong>Bowel or Bladder Dysfunction:</strong> Especially with tumors\r\n          compressing the spinal cord.\r\n        </li>\r\n      </ul>\r\n\r\n      <p style=\'margin:5px 0;padding:5px 0;font-size:30px;font-family:\"Times New Roman\",serif;font-weight:bold;\'>\r\n        Diagnosis:\r\n      </p>\r\n      <ul style=\"margin:5px;padding:5px;font-size:24px;font-family:\'Times New Roman\',serif; list-style-type: circle;\">\r\n        <li>\r\n          <strong>Imaging:</strong>\r\n        </li>\r\n      </ul>\r\n      <p style=\'margin-left:20px;padding:5px 0;font-size:24px;font-family:\"Times New Roman\",serif;\'>\r\n        MRI: Usually the primary investigation and commonly used to detect spine\r\n        tumors.\r\n      </p>\r\n      <p style=\'margin-left:20px;padding:5px 0;font-size:24px;font-family:\"Times New Roman\",serif;\'>\r\n        PET CT scan: Identifies the presence of multiple metastatic sites.\r\n      </p>\r\n      <p style=\'margin-left:20px;padding:5px 0;font-size:24px;font-family:\"Times New Roman\",serif;\'>\r\n        CT scan: Usually for detailed study and surgical planning.\r\n      </p>\r\n\r\n      <ul style=\"margin:5px;padding:5px;font-size:24px;font-family:\'Times New Roman\',serif; list-style-type: circle;\">\r\n        <li>\r\n          <strong>Biopsy:</strong> A tissue sample may be taken to determine if\r\n          the tumor is benign or malignant. In the case of spine vertebral\r\n          tumors, it can be done as a transpedicular biopsy usually under local\r\n          anesthesia/GA or a CT-guided biopsy.\r\n        </li>\r\n      </ul>\r\n\r\n      <p style=\'margin:5px 0;padding:5px 0;font-size:30px;font-family:\"Times New Roman\",serif;font-weight:bold;\'>\r\n        Treatment:\r\n      </p>\r\n      <p style=\'margin:5px 0;padding:5px 0;font-size:24px;font-family:\"Times New Roman\",serif;\'>\r\n        The goals of treatment for metastatic spinal tumors are often to relieve\r\n        pain, improve or preserve neurological function, and maintain spinal\r\n        stability. The treatment plan depends on the type and stage of the\r\n        primary cancer, the extent of metastasis, and the patient\'s overall\r\n        health.\r\n      </p>\r\n      <ul style=\"margin:5px;padding:5px;font-size:24px;font-family:\'Times New Roman\',serif; list-style-type: circle;\">\r\n        <li>\r\n          <strong>Medications:</strong>\r\n          <ul style=\"margin:5px;padding:5px;font-size:24px;font-family:\'Times New Roman\',serif; list-style-type: circle;\">\r\n            <li>\r\n              <strong>Bisphosphonates</strong> and <strong>Denosumab:</strong>\r\n              Help reduce bone destruction.\r\n            </li>\r\n            <li>\r\n              <strong>Corticosteroids:</strong> Can reduce swelling and help\r\n              with spinal cord compression.\r\n            </li>\r\n            <li>\r\n              <strong>Pain Management:</strong> Narcotics or other medications\r\n              for symptom relief.\r\n            </li>\r\n          </ul>\r\n        </li>\r\n        <li>\r\n          <strong>Radiation Therapy:</strong> Used to shrink or eliminate tumors\r\n          that can\'t be fully removed surgically.\r\n        </li>\r\n        <li>\r\n          <strong>Chemotherapy:</strong> More often used for malignant tumors.\r\n        </li>\r\n        <li>\r\n          <strong>Targeted Therapy:</strong> For specific types of cancer, such\r\n          as metastatic tumors.\r\n        </li>\r\n        <li>\r\n          <strong>Surgery:</strong> Often used to remove as much of the tumor as\r\n          possible. Surgery is needed in case of neurological deficit, severe\r\n          pain, or to provide structural support to the vertebral column.\r\n        </li>\r\n        <ul style=\"margin:5px;padding:5px;font-size:24px;font-family:\'Times New Roman\',serif; list-style-type: circle;\">\r\n          <li>\r\n            <strong>Vertebroplasty/Kyphoplasty:</strong> Minimally invasive\r\n            techniques that inject cement into the spine to stabilize weakened\r\n            vertebrae. These techniques stabilize the spine immediately and can\r\n            also obtain samples for biopsy simultaneously.\r\n          </li>\r\n        </ul>\r\n      </ul>\r\n\r\n      <p style=\'margin:5px 0;padding:5px 0;font-size:24px;font-family:\"Times New Roman\",serif;\'>\r\n        The approach to treatment depends on the type of tumor, its location,\r\n        and whether it is affecting spinal stability or neurological function.\r\n      </p>\r\n\r\n      <p style=\'margin:5px 0;padding:5px 0;font-size:30px;font-family:\"Times New Roman\",serif;font-weight:bold;\'>\r\n        Prognosis:\r\n      </p>\r\n      <p style=\'margin:5px 0;padding:5px 0;font-size:24px;font-family:\"Times New Roman\",serif;\'>\r\n        The prognosis of metastatic spine tumors varies widely based on the type\r\n        of primary cancer, the extent of metastasis, and the response to\r\n        treatment. While metastatic spine tumors are generally not curable,\r\n        early detection and appropriate treatment can improve quality of life\r\n        and prevent serious complications like paralysis.\r\n      </p>\r\n', 'Spine tumors are abnormal growths that develop in or around the spinal cord and vertebrae. They can be benign (non-cancerous) or malignant (cancerous) and may originate from the spine itself or spread');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
