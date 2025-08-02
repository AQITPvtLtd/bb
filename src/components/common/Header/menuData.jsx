const menuData = [
  {
    id: 1,
    title: "Home",
    newTab: true,
    path: "/",
  },
  {
    id: 2,
    title: "Know your doctor",
    newTab: false,
    path: "/know-your-doctor",
  },
  {
    id: 3,
    title: "Specialty Services",
    newTab: true,
    submenu: [
      {
        id: 31,
        title: "Minimally Invasive Spine Surgery",
        newTab: true,
        path: "/specialty-services/minimally-invasive-spine-surgery",
      },
      {
        id: 32,
        title: "Spine Deformity Correction",
        newTab: true,
        path: "/specialty-services/spine-deformity-correction",
      },
      {
        id: 33,
        title: "Traumatic Conditions of Spine",
        newTab: false,
        path: "/specialty-services/traumatic-conditions-of-spine",
      },
      {
        id: 34,
        title: "Endoscopic Spine Surgery",
        newTab: false,
        path: "/specialty-services/endoscopic-spine-surgery",
      },
      {
        id: 35,
        title: "Geriatric Spine Surgery",
        newTab: false,
        path: "/specialty-services/geriatric-spine-surgery",
      },
      {
        id: 36,
        title: "Artificial Disc Replacement",
        newTab: false,
        path: "/specialty-services/artificial-disc-replacement",
      },
      {
        id: 37,
        title: "Spinal Tumors",
        newTab: false,
        path: "/specialty-services/spine-tumors",
      },
      {
        id: 38,
        title: "Pain Management",
        newTab: false,
        path: "/specialty-services/pain-management",
      },
      {
        id: 39,
        title: "Spine Rehabilitation Programme",
        newTab: false,
        path: "/specialty-services/spine-rehabilitation-program",
      },
    ],
  },
  {
    id: 4,
    title: "Conditions Treated",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Deformity Correction",
        newTab: false,
        path: "/conditions-treated/deformity-correction",
      }, {
        id: 42,
        title: "Spinal Deformities",
        newTab: false,
        path: "/conditions-treated/spinal-deformities",
      }, {
        id: 43,
        title: "Spondylolisthesis",
        newTab: false,
        path: "/conditions-treated/spondylolisthesis",
      }, {
        id: 44,
        title: "Spine Tumors",
        newTab: false,
        path: "/conditions-treated/spine-tumors",
      },
      {
        id: 45,
        title: "Pain Procedure",
        newTab: false,
        path: "/conditions-treated/pain-procedure",
      }, {
        id: 46,
        title: "Vertebroplasty",
        newTab: false,
        path: "/conditions-treated/vertebroplastys",
      },
      {
        id: 47,
        title: "Facet Joint",
        newTab: false,
        path: "/conditions-treated/facet-joint",
      }, {
        id: 48,
        title: "Spine Endoscopy",
        newTab: false,
        path: "/conditions-treated/spine-endoscopy",
      }, {
        id: 49,
        title: "Discectomy",
        newTab: false,
        path: "/conditions-treated/discectomy",
      },
      {
        id: 411,
        title: "Kyphoscoliosis",
        newTab: false,
        path: "/conditions-treated/kyphoscoliosis",
      },
      {
        id: 412,
        title: "Spinal Infections",
        newTab: false,
        path: "/conditions-treated/spinal-infections",
      },
      {
        id: 413,
        title: "Spine Trauma",
        newTab: false,
        path: "/conditions-treated/spine-trauma",
      }, {
        id: 414,
        title: "Kyphoplasty",
        newTab: false,
        path: "/conditions-treated/kyphoplasty",
      },
      {
        id: 415,
        title: "RF Ablation of Disc",
        newTab: false,
        path: "/conditions-treated/rf-ablation-of-disc",
      },

      {
        id: 416,
        title: "Spinal Fusion Surgery",
        newTab: false,
        path: "/conditions-treated/spinal-fusion-surgery",
      },

      {
        id: 417,
        title: "Post Infectious Spine Deformities Correction",
        newTab: false,
        path: "/conditions-treated/post-infectious-spine-deformities-correction",
      },

      {
        id: 418,
        title: "Pediatric Congenital Spine Deformities",
        newTab: false,
        path: "/conditions-treated/pediatric-congenital-spine-deformities",
      },

      {
        id: 419,
        title: "Selective Cervical Nerve Root Blockade (SCNRB)",
        newTab: false,
        path: "/conditions-treated/selective-cervical-nerve-root-blockade",
      },

      {
        id: 421,
        title: "Spinal Canal Stenosis Decompression",
        newTab: false,
        path: "/conditions-treated/spinal-canal-stenosis-decompression",
      },
      {
        id: 422,
        title: "Adult Degenerative Deformities",
        newTab: false,
        path: "/conditions-treated/adult-degenerative-deformities",
      },
      {
        id: 423,
        title: "Craniovertebral Junction Stabilization Surgery",
        newTab: false,
        path: "/conditions-treated/craniovertebral-junction-stabilization-surgery",
      },

      {
        id: 424,
        title: "Degenerative Spine Conditions",
        newTab: false,
        path: "/conditions-treated/degenerative-spine-conditions",
      },
      {
        id: 425,
        title: "Selective Nerve Root Block (SNRB)",
        newTab: false,
        path: "/conditions-treated/selective-nerve-root-block",
      },
      {
        id: 426,
        title: "Lumbar Sympathetic Block",
        newTab: false,
        path: "/conditions-treated/lumbar-sympathetic-block",
      },
      {
        id: 427,
        title: "Periportal Tube & Uniportal",
        newTab: false,
        path: "/conditions-treated/periportal-tube-&-uniportal",
      },
    ],
  },
  {
    id: 5,
    title: "Media",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Photo Gallery",
        newTab: true,
        path: "/media/photo-gallery",
      },
      {
        id: 52,
        title: "Video Gallery",
        newTab: true,
        path: "/media/video-gallery",
      },
      {
        id: 53,
        title: "Print Media",
        newTab: false,
        path: "/media/print-media",
      },
      {
        id: 54,
        title: "Blogs",
        newTab: false,
        path: "/media/blogs",
      },
    ],
  },
  {
    id: 6,
    title: "Testimonials",
    newTab: false,
    path: "/media/testimonials",
  },
  {
    id: 7,
    title: "Contact us",
    newTab: false,
    path: "/contact-us",
  },
];
export default menuData;
