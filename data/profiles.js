const arifinRafi= {
    name: "Arifin Rafi",
    designation: "CEO",
    speciality: "Embedded Software Engineer",
    facebook:"https://www.facebook.com/arifin.rafi.16",
    github:"https://github.com/ArifinRafi",
    linkedin:"https://www.linkedin.com/in/md-arifin-ahmed-rafi-4490a1193/",
    cover: "https://res.cloudinary.com/homeeventtest/image/upload/v1672268848/Profiles/RAFI_BHAI_COVER_reeeua.png",
    dp: "https://res.cloudinary.com/homeeventtest/image/upload/v1672268852/Profiles/rafi_bhai_mvkk8g.png",
    about: "lorem ipsum dolor amet. lorem ipsum dolor amet. lorem ipsum dolor amet. lorem ipsum dolor amet. "
}
const sihabShahriar= {
    name: "Sihab Shahriar",
    designation: "CTO",
    speciality: "UI/UX Developer",
    facebook: "https://www.facebook.com/sihabsahariarsizan",
    github: "https://github.com/SihabSahariar",
    linkedin: "https://www.linkedin.com/in/sihabsahariar/",
    cover: "https://res.cloudinary.com/homeeventtest/image/upload/v1672268848/Profiles/SIHAB_BHAI_COVER_fyg7f1.png",
    dp: "https://res.cloudinary.com/homeeventtest/image/upload/v1672268853/Profiles/sihab_bhai_q4ifyx.png",
    about: "This is Sihab Sahariar, a Robotics and Software development enthusiast. He has nearly 4 years of experience in Software development and Robotics. Currently, he has been working as a Software Engineer(AI Video Analytics Team) at Lynkeus AI (A Korean AI based Software Company). Morever, he has been working in BRACU DICHARI(An Autonomous Rescue Rover) as the Team Lead, specially in Rover Control, Onboard AI & Autonomy. In the past, he has worked with BRACU Mongol-Tori (Mars Rover Team From BRAC University) as the Sub-Team Lead of Control & Software Team. He has also worked in acciGone(Advanced Driving Assistant System - ADAS Team) as a GUI Developer. He has sound knowledge of Software Development, Embedded Systems, Computer Vision, Machine Learning, Deep Learning and problem solving . He is a passionate problem solver. He loves to do problem solving during his leisure time. He loves  Football , Cricket and Photography."
}
const asmTareq = {
    name: "Tareq Mahmood",
    designation: "CIO",
    speciality: "Software Engineer",
    facebook:"https://www.facebook.com/Mahmood.Tareq.2111/",
    github: "https://github.com/eddie2111",
    linkedin: "https://www.linkedin.com/in/a-s-m-tareq-mahmood-4a7a96185/",
    cover: "https://res.cloudinary.com/homeeventtest/image/upload/v1672268848/Profiles/TAREQ_BHAI_COVER_bvndjk.png",
    dp: "https://res.cloudinary.com/homeeventtest/image/upload/v1672268852/Profiles/tareq_bhai_pubg0y.png",
    about: "This is Tareq Mahmood, a web development and blockchain focused engineer. He has nearly a 4 years of experience in Software Development and Web Development. He has worked with Bracu Duburi as a web developer and autonomous engineer. Previously worked with Myeventizer as a backend software engineer and acciGone(BlackBox) as a web application developer. He also has a sound knowledge on RESTful API, NodeJS, React, NextJS, PHP, AWS, SQl/NOSQL databases, NGINX, Docker, Redis, Postgres etc. He is also experienced in Serverless functions and deployments. He is working with Natural Language Processing, Machine Learning, Deep Learning, Image Processing, Text processing and Blockchain. He is a passionate developer seeking knowledge and gain expereince."
}
const srantoSoumik= {
    name: "Soumik Hassan Shranto",
    designation: "CBO",
    speciality: "Business Development",
    facebook: "https://www.facebook.com/Mik.Hasan",
    linkedin:"#",
    github: "#",
    cover: "https://res.cloudinary.com/homeeventtest/image/upload/v1672268848/Profiles/SHRANTO_jspaot.png",
    dp: "https://res.cloudinary.com/homeeventtest/image/upload/v1672268860/Profiles/Shrantoo_zbfbnj.png",
    about: "lorem ipsum dolor amet. lorem ipsum dolor amet. lorem ipsum dolor amet. lorem ipsum dolor amet. "
}

const noData = {
    name: "no data",
    designation: "???",
    speciality: "???",
    about: "no profile exists with that user ID"
}

const profileData = (data)=>{
    if (data === "c76771c6-2162-4844-a643-f5c63175b5e4"){
        return arifinRafi;
    }
    else if (data === "5fbc5333-0143-4cb6-a231-fff929ec2627"){
        return sihabShahriar;
    }
    else if (data === "66d09463-db28-4a26-b492-8f436dea37e9"){
        return asmTareq;
    }
    else if (data === "61ea4743-57e3-4047-9416-dded311ec471"){
        return srantoSoumik;
    }
    else{
        return noData;
    }
}
exports.profileData = profileData;