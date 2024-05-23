class Person {
     constructor(
                
        name = "praveen",
        age = 22,
        emailId = "rpraveen@gmail.com",
        phoneNo  = 638071829,
        streetName  = "P K Nagar",
        city = "Chennai",
        district = "TamilNadu",
        PostalCode = 600094,
        SchoolName = "John dewey school",
        SSLCMark = 49,
        Schoolyearofcompletion = 2018,
        Diplomacollege = "TVS Polytechnic college",
        DiplomaMark = 78,
        Department = "Mechanical",
        Diplomayearofcompletion = 2021,
        HighestQualification = "B.E",
        department = "B.E Mechanical",
        collegeCgpa = 8.05,
        collegeProject = "Exprimantal of Numarical Analaysis of 3D Printed",
        CollegeCompletion = 2024,
        TechnicalSkills = "Java",
        companyName = "IBM",
        Jobrole = "Software Developer",
    ){
        this.name = name;
        this.age = age;
        this.emailId = emailId;
        this.phoneNo = phoneNo;
        this.streetName = streetName;
        this.city = city;
        this.district = district;
        this.PostalCode = PostalCode;
        this.SchoolName = SchoolName;
        this.SSLCMark = SSLCMark;
        this.Schoolyearofcompletion = Schoolyearofcompletion;
        this.Diplomacollege = Diplomacollege;
        this.DiplomaMark = DiplomaMark;
        this.Department = Department;
        this.Diplomayearofcompletion = Diplomayearofcompletion;
        this.HighestQualification = HighestQualification;
        this.collegeCgpa = collegeCgpa;
        this.collegeProject = collegeProject;
        this.CollegeCompletion = CollegeCompletion;
        this.TechnicalSkills = TechnicalSkills;
        this.companyName = companyName;
        this.Jobrole = Jobrole;
    }
    displaypersonalInfo() {
         console.log(
            `Name => ${this.name},
             Age => ${this.age},
             Email => ${this.emailId},
             PhoneNo => ${this.phoneNo}.`
         );
         console.log(
             `StreetName => ${this.streetName},
              City => ${this.city},
              District => ${this.district},
              PostalCode => ${this.PostalCode}.`
         );
    }
         displaySchooleDetails() {
        console.log(
               `School Name => ${this.SchoolName},
                SSLC Mark => ${this.SSLCMark},
                School year of complection => ${this.Schoolyearofcompletion}.`
         );
    }    
}
         const person1details = new Person();
         person1details.displaySchooleDetails();
         //person1details.displaypersonalInfo();
