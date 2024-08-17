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
    path: "/knowDoctor",
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
        path: "/special_service/minimally" 
      },
      {
        id: 32,
        title: "Spine Deformity Correction",
        newTab: true,
        path: "/special_service/spineDeformity"
      },
      {
        id: 33,
        title: "Traumatic Conditions of Spine",
        newTab: false,
        path: "/special_service/traumatic" 
      },
      {
        id: 34,
        title: "Endoscopic Spine Surgery",
        newTab: false,
        path: "/special_service/endoscopic" 
      },
      {
        id: 35,
        title: "Geriatric Spine Surgery",
        newTab: false,
        path: "/special_service/geriatric" 
      },
      {
        id: 36,
        title: "Artificial Disc Replacement",
        newTab: false,
        path: "/special_service/artificial" 
      },
      {
        id: 37,
        title: "Spinal Tumors",
        newTab: false,
        path: "/special_service/spinal" 
      },
      {
        id: 38,
        title: "Pain Management",
        newTab: false,
        path: "/special_service/pain" 
      },
      {
        id: 39,
        title: "Rehabilitation Programme",
        newTab: false,
        path: "/special_service/rehabilitation" 
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
        title: "Degenerative Spine Conditions",
        newTab: false,
        path: "/conditions_treated/degenerative" 
      },
      {
        id: 42,
        title: "Spondylolisthesis",
        newTab: false,
        path: "/conditions_treated/spondylolisthesis" 
      },
      {
        id: 43,
        title: "Spinal Fusion Surgery",
        newTab: false,
        path: "/conditions_treated/spinal" 
      },
      {
        id: 44,
        title: "Spinal Deformities",
        newTab: false,
        path: "/conditions_treated/spinalDeformities" 
      },
      {
        id: 45,
        title: "Post Infectious Spine Deformities Correction",
        newTab: false,
        path: "/conditions_treated/postInfectious" 
      },
      {
        id: 46,
        title: "Spine Tumors",
        newTab: false,
        path: "/conditions_treated/spineTumors"
      },
      {
        id: 47,
        title: "Pain Procedure",
        newTab: false,
         path: "/conditions_treated/painProcedure"
      },
      {
        id: 48,
        title: "Pediatric Congenital Spine Deformities",
        newTab: false,
         path: "/conditions_treated/pediatric"
      },
      {
        id: 49,
        title: "Vertebroplasty",
        newTab: false,
         path: "/conditions_treated/vertebroplasty"
      },
      {
        id: 411,
        title: "Facet Joint",
        newTab: false,
         path: "/conditions_treated/facetJoint"
      },
      {
        id: 112,
        title: "Selective Cervical Nerve Root Blockade (SCNRB)",
        newTab: false,
         path: "/conditions_treated/selective"
      },
      {
        id: 413,
        title: "Spine Endoscopy",
        newTab: false,
         path: "/conditions_treated/spineEndoscopy"
      },
      {
        id: 414,
        title: "Spinal Canal Stenosis Decompression",
        newTab: false,
         path: "/conditions_treated/spinalCanal"
      },
      {
        id: 415,
        title: "Adult Degenerative Deformities",
        newTab: false,
        path: "/conditions_treated/adult"
      },
      {
        id: 416,
        title: "Discectomy",
        newTab: false,
        path: "/conditions_treated/discectomy"
      },
      {
        id: 417,
        title: "Kyphoscoliosis",
        newTab: false,
        path: "/conditions_treated/kyphoscoliosis"
      },
      {
        id: 418,
        title: "Spinal Infections",
        newTab: false,
        path: "/conditions_treated/spinalInfections"
      },
      {
        id: 419,
        title: "Spine Trauma",
        newTab: false,
        path: "/conditions_treated/spinalInfections"
      },

      {
        id: 420,
        title: "Craniovertebral Junction Stabilization Surgery",
        newTab: false,
        path: "/conditions_treated/craniovertebral"
      },
      {
        id: 421,
        title: "Kyphoplasty",
        newTab: false,
        path: "/conditions_treated/craniovertebral"
      },

      {
        id: 422,
        title: "RF Ablation of Disc",
        newTab: false,
        path: "/conditions_treated/rf"
      },
      {
        id: 423,
        title: "Selective Nerve Root Block (SNRB)",
        newTab: false,
        path: "/conditions_treated/selectiveNerve"
      },
      {
        id: 424,
        title: "Lumbar Sympathetic Block",
        newTab: false,
        path: "/conditions_treated/lumbar"
      },
      {
        id: 425,
        title: "Periportal Tube & Uniportal",
        newTab: false,
        path: "/conditions_treated/periportal"
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
        title: "Photo gallery",
        newTab: true,
        path: "/media/photoGallery"
      },
      {
        id: 52,
        title: "Video gallery",
        newTab: true,
        path: "/media/videoGallery"
      },
      {
        id: 53,
        title: "Print media",
        newTab: false,
        path: "/media/printMedia" 
      },
      {
        id: 54,
        title: "Blog",
        newTab: false,
        path: "/media/blogs"
      },
    ],  
  },
  {
    id: 6,
    title: "Contact us",
    newTab: false,
    path: "/contactus",
  },
];
export default menuData;