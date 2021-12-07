let clients = `[
   {
      "first name": "Justin",
      "last name": "Septimus",
      "email" : "example1@email.com",
      "user status": "Active",
      "last login" : "2020-04-30",
      "payment status": "Paid",
      "payment info" : "2020-04-15",
      "amount" : 200,
      "currency" : "USD"
   },
   {
      "first name": "Anika Rhiel",
      "last name": "Madsen",
      "email" : "example@email.com",
      "user status": "Active",
      "last login" : "2020-04-18",
      "payment status": "Overdue",
      "payment info" : "2020-04-10",
      "amount" : 300,
      "currency" : "USD",
      "sub" : [
         {
            "date" : "2020-10-20",
            "user activity" : "NNN Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            "detail" : "NNN Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum."
         },
         {
            "date" : "2020-06-06",
            "user activity" : "111 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            "detail" : "111 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum."
         },
         {
            "date" : "2020-05-06",
            "user activity" : "OOO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            "detail" : "OOO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum."
         },
         {
            "date" : "2020-04-18",
            "user activity" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            "detail" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum."
         }
      ]
   },
   {
      "first name": "Miracle",
      "last name": "Vaccaro",
      "email" : "example2@email.com",
      "user status": "Active",
      "last login" : "2020-12-14",
      "payment status": "Paid",
      "payment info" : "2020-10-01",
      "amount" : 250,
      "currency" : "USD"
   },
   {
      "first name": "Erin",
      "last name": "Levin",
      "email" : "example@email.com",
      "user status": "Active",
      "last login" : "2020-06-15",
      "payment status": "Unpaid",
      "payment info" : "2020-06-19",
      "amount" : 200,
      "currency" : "USD",
      "sub" : [
         {
            "date" : "2020-11-10",
            "user activity" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            "detail" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum."
         },
         {
            "date" : "2020-10-23",
            "user activity" : "111 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            "detail" : "111 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum."
         }
      ]
   },
   {
      "first name": "Mira",
      "last name": "Herwitz",
      "email" : "example33@email.com",
      "user status": "Inactive",
      "last login" : "2020-06-11",
      "payment status": "Paid",
      "payment info" : "2020-07-15",
      "amount" : 200,
      "currency" : "USD"
   },
   {
      "first name": "Jaxson",
      "last name": "Siphron",
      "email" : "example33@email.com",
      "user status": "Inactive",
      "last login" : "2020-08-28",
      "payment status": "Paid",
      "payment info" : "2020-08-12",
      "amount" : 750,
      "currency" : "USD"
   },
   {
      "first name": "Mira",
      "last name": "Levin",
      "email" : "example11@email.com",
      "user status": "Active",
      "last login" : "2020-04-03",
      "payment status": "Paid",
      "payment info" : "2020-09-16",
      "amount" : 200,
      "currency" : "USD",
      "sub" : [
         {
            "date" : "2020-12-13",
            "user activity" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            "detail" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum."
         },
         {
            "date" : "2020-10-30",
            "user activity" : "444 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            "detail" : "444 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum."
         }
      ]
   },
   {
      "first name": "Lincoln",
      "last name": "Levin",
      "email" : "example@email.com",
      "user status": "Active",
      "last login" : "2020-10-03",
      "payment status": "Paid",
      "payment info" : "2020-10-16",
      "amount" : 370,
      "currency" : "USD"
   },
   {
      "first name": "Phillip",
      "last name": "Saris",
      "email" : "example2@email.com",
      "user status": "Inactive",
      "last login" : "2020-01-10",
      "payment status": "Unpaid",
      "payment info" : "2020-04-14",
      "amount" : 200,
      "currency" : "USD",
      "sub" : [
         {
            "date" : "2020-12-31",
            "user activity" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            "detail" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum."
         },
         {
            "date" : "2020-12-10",
            "user activity" : "444 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            "detail" : "444 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum."
         }
      ]
   },
   {
      "first name": "Cheyenne Ekstrom",
      "last name": "Bothman",
      "email" : "example3@email.com",
      "user status": "Inactive",
      "last login" : "2020-02-15",
      "payment status": "Unpaid",
      "payment info" : "2020-09-08",
      "amount" : 200,
      "currency" : "USD"
   },
   {
      "first name": "Mike",
      "last name": "Shinoda",
      "email" : "example@email.com",
      "user status": "Active",
      "last login" : "2020-03-30",
      "payment status": "Overdue",
      "payment info" : "2020-04-01",
      "amount" : 800,
      "currency" : "USD"
   },
   {
      "first name": "Vasiliy",
      "last name": "Lomachenko",
      "email" : "example@email.com",
      "user status": "Active",
      "last login" : "2020-02-13",
      "payment status": "Paid",
      "payment info" : "2020-02-14",
      "amount" : 400,
      "currency" : "USD"
   },
   {
      "first name": "Jared",
      "last name": "Leto",
      "email" : "example11@email.com",
      "user status": "Inactive",
      "last login" : "2020-11-03",
      "payment status": "Paid",
      "payment info" : "2020-12-14",
      "amount" : 500,
      "currency" : "USD"
   },
   {
      "first name": "Kristina",
      "last name": "Lopez",
      "email" : "example4@email.com",
      "user status": "Active",
      "last login" : "2020-12-11",
      "payment status": "Paid",
      "payment info" : "2020-12-21",
      "amount" : 380,
      "currency" : "USD"
   },
   {
      "first name": "Anna",
      "last name": "Smith",
      "email" : "example12@email.com",
      "user status": "Inactive",
      "last login" : "2020-10-01",
      "payment status": "Paid",
      "payment info" : "2020-10-10",
      "amount" : 550,
      "currency" : "USD"
   },
   {
      "first name": "Will",
      "last name": "Smith",
      "email" : "example00@email.com",
      "user status": "Active",
      "last login" : "2020-01-01",
      "payment status": "Paid",
      "payment info" : "2020-02-14",
      "amount" : 590,
      "currency" : "USD"
   },
   {
      "first name": "Michael",
      "last name": "Jackson",
      "email" : "example@email.com",
      "user status": "Active",
      "last login" : "2020-04-05",
      "payment status": "Paid",
      "payment info" : "2020-07-29",
      "amount" : 330,
      "currency" : "USD"
   },
   {
      "first name": "Ole Einar",
      "last name": "Bjoerndalen",
      "email" : "example1@email.com",
      "user status": "Active",
      "last login" : "2020-08-08",
      "payment status": "Paid",
      "payment info" : "2020-09-09",
      "amount" : 470,
      "currency" : "USD"
   },
   {
      "first name": "Jean Claude",
      "last name": "Van Damme",
      "email" : "example1@email.com",
      "user status": "Active",
      "last login" : "2020-11-03",
      "payment status": "Paid",
      "payment info" : "2020-12-04",
      "amount" : 170,
      "currency" : "USD"
   },
   {
      "first name": "Katherine",
      "last name": "Johnson",
      "email" : "example4@email.com",
      "user status": "Active",
      "last login" : "2020-09-05",
      "payment status": "Paid",
      "payment info" : "2020-09-30",
      "amount" : 220,
      "currency" : "USD"
   },
   {
      "first name": "Jason",
      "last name": "Statham",
      "email" : "example@email.com",
      "user status": "Active",
      "last login" : "2020-05-05",
      "payment status": "Paid",
      "payment info" : "2020-06-01",
      "amount" : 530,
      "currency" : "USD"
   },
   {
      "first name": "Annabelle",
      "last name": "Jackson",
      "email" : "example1@email.com",
      "user status": "Active",
      "last login" : "2020-07-11",
      "payment status": "Paid",
      "payment info" : "2020-08-30",
      "amount" : 130,
      "currency" : "USD"
   },
   {
      "first name": "Gomer",
      "last name": "Simpson",
      "email" : "example22@email.com",
      "user status": "Inactive",
      "last login" : "2020-02-02",
      "payment status": "Paid",
      "payment info" : "2020-02-28",
      "amount" : 340,
      "currency" : "USD"
   },
   {
      "first name": "Peter",
      "last name": "Parker",
      "email" : "example11@email.com",
      "user status": "Active",
      "last login" : "2020-03-28",
      "payment status": "Paid",
      "payment info" : "2020-03-29",
      "amount" : 890,
      "currency" : "USD"
   },
   {
      "first name": "Jane",
      "last name": "Smith",
      "email" : "example@email.com",
      "user status": "Inactive",
      "last login" : "2020-11-04",
      "payment status": "Overdue",
      "payment info" : "2020-11-02",
      "amount" : 480,
      "currency" : "USD",
      "sub" : [
         {
            "date" : "2020-08-31",
            "user activity" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            "detail" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum."
         },
         {
            "date" : "2020-07-20",
            "user activity" : "444 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            "detail" : "444 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum."
         },
         {
            "date" : "2020-05-10",
            "user activity" : "111 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            "detail" : "111 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum."
         }
      ]
   },
   {
      "first name": "Harry",
      "last name": "Potter",
      "email" : "example1@email.com",
      "user status": "Active",
      "last login" : "2020-12-02",
      "payment status": "Paid",
      "payment info" : "2020-11-28",
      "amount" : 280,
      "currency" : "USD"
   },
   {
      "first name": "Peter",
      "last name": "Kravitz",
      "email" : "example@email.com",
      "user status": "Active",
      "last login" : "2020-04-14",
      "payment status": "Paid",
      "payment info" : "2020-04-13",
      "amount" : 360,
      "currency" : "USD"
   },
   {
      "first name": "Magda",
      "last name": "Schweiger",
      "email" : "example3@email.com",
      "user status": "Active",
      "last login" : "2020-10-01",
      "payment status": "Overdue",
      "payment info" : "2020-11-02",
      "amount" : 110,
      "currency" : "USD"
   },
   {
      "first name": "Anastasia",
      "last name": "Brown",
      "email" : "example@email.com",
      "user status": "Active",
      "last login" : "2020-01-11",
      "payment status": "Paid",
      "payment info" : "2020-07-30",
      "amount" : 510,
      "currency" : "USD"
   },
   {
      "first name": "Stephanie",
      "last name": "Stone",
      "email" : "example3@email.com",
      "user status": "Active",
      "last login" : "2020-07-07",
      "payment status": "Paid",
      "payment info" : "2020-08-09",
      "amount" : 220,
      "currency" : "USD"
   },
   {
      "first name": "Mylene",
      "last name": "Farmer",
      "email" : "example@email.com",
      "user status": "Inactive",
      "last login" : "2020-03-04",
      "payment status": "Paid",
      "payment info" : "2020-05-01",
      "amount" : 180,
      "currency" : "USD"
   },
   {
      "first name": "Edgar Allan",
      "last name": "Poe",
      "email" : "example11@email.com",
      "user status": "Active",
      "last login" : "2020-09-09",
      "payment status": "Paid",
      "payment info" : "2020-08-03",
      "amount" : 250,
      "currency" : "USD"
   },
   {
      "first name": "Emilia",
      "last name": "Clark",
      "email" : "example22@email.com",
      "user status": "Inactive",
      "last login" : "2020-07-06",
      "payment status": "Unpaid",
      "payment info" : "2020-08-06",
      "amount" : 340,
      "currency" : "USD"
   },
   {
      "first name": "Michael",
      "last name": "Robinson",
      "email" : "example12@email.com",
      "user status": "Active",
      "last login" : "2020-11-29",
      "payment status": "Paid",
      "payment info" : "2020-06-17",
      "amount" : 390,
      "currency" : "USD"
   },
   {
      "first name": "Thomas",
      "last name": "Cruze",
      "email" : "example@email.com",
      "user status": "Active",
      "last login" : "2020-08-08",
      "payment status": "Paid",
      "payment info" : "2020-10-14",
      "amount" : 120,
      "currency" : "USD"
   },
   {
      "first name": "Joshua",
      "last name": "Perkins",
      "email" : "example11@email.com",
      "user status": "Active",
      "last login" : "2020-03-03",
      "payment status": "Paid",
      "payment info" : "2020-05-04",
      "amount" : 240,
      "currency" : "USD"
   },
   {
      "first name": "Vitaliy",
      "last name": "Clichko",
      "email" : "example@email.com",
      "user status": "Active",
      "last login" : "2020-12-02",
      "payment status": "Paid",
      "payment info" : "2020-12-16",
      "amount" : 200,
      "currency" : "USD"
   },
   {
      "first name": "Viktor",
      "last name": "Potter",
      "email" : "example33@email.com",
      "user status": "Active",
      "last login" : "2020-06-11",
      "payment status": "Paid",
      "payment info" : "2020-10-14",
      "amount" : 150,
      "currency" : "USD"
   },
   {
      "first name": "Samuel",
      "last name": "Jackson",
      "email" : "example@email.com",
      "user status": "Active",
      "last login" : "2020-10-05",
      "payment status": "Paid",
      "payment info" : "2020-11-30",
      "amount" : 300,
      "currency" : "USD"
   },
   {
      "first name": "Ann",
      "last name": "Hathaway",
      "email" : "example11@email.com",
      "user status": "Active",
      "last login" : "2020-02-10",
      "payment status": "Paid",
      "payment info" : "2020-01-14",
      "amount" : 190,
      "currency" : "USD"
   },
   {
      "first name": "Kate",
      "last name": "Hudson",
      "email" : "example10@email.com",
      "user status": "Active",
      "last login" : "2020-09-22",
      "payment status": "Overdue",
      "payment info" : "2020-12-12",
      "amount" : 210,
      "currency" : "USD"
   },
   {
      "first name": "Melanie",
      "last name": "Griffith",
      "email" : "example1@email.com",
      "user status": "Active",
      "last login" : "2020-06-05",
      "payment status": "Paid",
      "payment info" : "2020-08-10",
      "amount" : 150,
      "currency" : "USD"
   },
   {
      "first name": "Helena",
      "last name": "Carter",
      "email" : "example2@email.com",
      "user status": "Active",
      "last login" : "2020-08-13",
      "payment status": "Paid",
      "payment info" : "2020-10-27",
      "amount" : 420,
      "currency" : "USD"
   },
   {
      "first name": "Lucie",
      "last name": "Liu",
      "email" : "example@email.com",
      "user status": "Active",
      "last login" : "2020-05-09",
      "payment status": "Paid",
      "payment info" : "2020-08-28",
      "amount" : 150,
      "currency" : "USD"
   },
   {
      "first name": "Carl",
      "last name": "Lagerfeld",
      "email" : "example@email.com",
      "user status": "Active",
      "last login" : "2020-10-28",
      "payment status": "Paid",
      "payment info" : "2020-11-01",
      "amount" : 290,
      "currency" : "USD"
   },
   {
      "first name": "Philipp",
      "last name": "Plein",
      "email" : "example@email.com",
      "user status": "Active",
      "last login" : "2020-01-02",
      "payment status": "Paid",
      "payment info" : "2020-01-04",
      "amount" : 190,
      "currency" : "USD"
   },
   {
      "first name": "Marie",
      "last name": "Olsen",
      "email" : "example13@email.com",
      "user status": "Active",
      "last login" : "2020-04-24",
      "payment status": "Paid",
      "payment info" : "2020-06-26",
      "amount" : 360,
      "currency" : "USD"
   },
   {
      "first name": "Mario",
      "last name": "Olsen",
      "email" : "example3@email.com",
      "user status": "Active",
      "last login" : "2020-05-23",
      "payment status": "Paid",
      "payment info" : "2020-05-01",
      "amount" : 240,
      "currency" : "USD"
   },
   {
      "first name": "Marilyn",
      "last name": "Manson",
      "email" : "example1@email.com",
      "user status": "Active",
      "last login" : "2020-07-08",
      "payment status": "Paid",
      "payment info" : "2020-06-24",
      "amount" : 110,
      "currency" : "USD"
   },
   {
      "first name": "Stefan",
      "last name": "Gold",
      "email" : "example@email.com",
      "user status": "Active",
      "last login" : "2020-07-14",
      "payment status": "Paid",
      "payment info" : "2020-07-04",
      "amount" : 200,
      "currency" : "USD"
   }
]`

// 50








