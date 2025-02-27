import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
   @Output() stateEmit = new EventEmitter();
   @Output() districtEmit = new EventEmitter();
   @Output() change = new EventEmitter();

  stateSelect:string = '';
  stateArr;
  districtSelect = [];



  regionData = {  
    "states":[  
       {  
          "state":"Andhra Pradesh",
          "Andhra Pradesh":[  
             "Anantapur",
             "Chittoor",
             "East Godavari",
             "Guntur",
             "Krishna",
             "Kurnool",
             "Nellore",
             "Prakasam",
             "Srikakulam",
             "Visakhapatnam",
             "Vizianagaram",
             "West Godavari",
             "YSR Kadapa"
          ]
       },
       {  
          "state":"Arunachal Pradesh",
          "Arunachal Pradesh":[  
             "Tawang",
             "West Kameng",
             "East Kameng",
             "Papum Pare",
             "Kurung Kumey",
             "Kra Daadi",
             "Lower Subansiri",
             "Upper Subansiri",
             "West Siang",
             "East Siang",
             "Siang",
             "Upper Siang",
             "Lower Siang",
             "Lower Dibang Valley",
             "Dibang Valley",
             "Anjaw",
             "Lohit",
             "Namsai",
             "Changlang",
             "Tirap",
             "Longding"
          ]
       },
       {  
          "state":"Assam",
          "Assam":[  
             "Baksa",
             "Barpeta",
             "Biswanath",
             "Bongaigaon",
             "Cachar",
             "Charaideo",
             "Chirang",
             "Darrang",
             "Dhemaji",
             "Dhubri",
             "Dibrugarh",
             "Goalpara",
             "Golaghat",
             "Hailakandi",
             "Hojai",
             "Jorhat",
             "Kamrup Metropolitan",
             "Kamrup",
             "Karbi Anglong",
             "Karimganj",
             "Kokrajhar",
             "Lakhimpur",
             "Majuli",
             "Morigaon",
             "Nagaon",
             "Nalbari",
             "Dima Hasao",
             "Sivasagar",
             "Sonitpur",
             "South Salmara-Mankachar",
             "Tinsukia",
             "Udalguri",
             "West Karbi Anglong"
          ]
       },
       {  
          "state":"Bihar",
          "Bihar":[  
             "Araria",
             "Arwal",
             "Aurangabad",
             "Banka",
             "Begusarai",
             "Bhagalpur",
             "Bhojpur",
             "Buxar",
             "Darbhanga",
             "East Champaran (Motihari)",
             "Gaya",
             "Gopalganj",
             "Jamui",
             "Jehanabad",
             "Kaimur (Bhabua)",
             "Katihar",
             "Khagaria",
             "Kishanganj",
             "Lakhisarai",
             "Madhepura",
             "Madhubani",
             "Munger (Monghyr)",
             "Muzaffarpur",
             "Nalanda",
             "Nawada",
             "Patna",
             "Purnia (Purnea)",
             "Rohtas",
             "Saharsa",
             "Samastipur",
             "Saran",
             "Sheikhpura",
             "Sheohar",
             "Sitamarhi",
             "Siwan",
             "Supaul",
             "Vaishali",
             "West Champaran"
          ]
       },
       {  
          "state":"Chandigarh (UT)",
          "Chandigarh (UT)":[  
             "Chandigarh"
          ]
       },
       {  
          "state":"Chhattisgarh",
          "Chhattisgarh":[  
             "Balod",
             "Baloda Bazar",
             "Balrampur",
             "Bastar",
             "Bemetara",
             "Bijapur",
             "Bilaspur",
             "Dantewada (South Bastar)",
             "Dhamtari",
             "Durg",
             "Gariyaband",
             "Janjgir-Champa",
             "Jashpur",
             "Kabirdham (Kawardha)",
             "Kanker (North Bastar)",
             "Kondagaon",
             "Korba",
             "Korea (Koriya)",
             "Mahasamund",
             "Mungeli",
             "Narayanpur",
             "Raigarh",
             "Raipur",
             "Rajnandgaon",
             "Sukma",
             "Surajpur  ",
             "Surguja"
          ]
       },
       {  
          "state":"Dadra and Nagar Haveli (UT)",
          "Dadra and Nagar Haveli (UT)":[  
             "Dadra & Nagar Haveli"
          ]
       },
       {  
          "state":"Daman and Diu (UT)",
          "Daman and Diu (UT)":[  
             "Daman",
             "Diu"
          ]
       },
       {  
          "state":"Delhi (NCT)",
          "Delhi (NCT)":[  
             "Central Delhi",
             "East Delhi",
             "New Delhi",
             "North Delhi",
             "North East  Delhi",
             "North West  Delhi",
             "Shahdara",
             "South Delhi",
             "South East Delhi",
             "South West  Delhi",
             "West Delhi"
          ]
       },
       {  
          "state":"Goa",
          "Goa":[  
             "North Goa",
             "South Goa"
          ]
       },
       {  
          "state":"Gujarat",
          "Gujarat":[  
             "Ahmedabad",
             "Amreli",
             "Anand",
             "Aravalli",
             "Banaskantha (Palanpur)",
             "Bharuch",
             "Bhavnagar",
             "Botad",
             "Chhota Udepur",
             "Dahod",
             "Dangs (Ahwa)",
             "Devbhoomi Dwarka",
             "Gandhinagar",
             "Gir Somnath",
             "Jamnagar",
             "Junagadh",
             "Kachchh",
             "Kheda (Nadiad)",
             "Mahisagar",
             "Mehsana",
             "Morbi",
             "Narmada (Rajpipla)",
             "Navsari",
             "Panchmahal (Godhra)",
             "Patan",
             "Porbandar",
             "Rajkot",
             "Sabarkantha (Himmatnagar)",
             "Surat",
             "Surendranagar",
             "Tapi (Vyara)",
             "Vadodara",
             "Valsad"
          ]
       },
       {  
          "state":"Haryana",
          "Haryana":[  
             "Ambala",
             "Bhiwani",
             "Charkhi Dadri",
             "Faridabad",
             "Fatehabad",
             "Gurgaon",
             "Hisar",
             "Jhajjar",
             "Jind",
             "Kaithal",
             "Karnal",
             "Kurukshetra",
             "Mahendragarh",
             "Mewat",
             "Palwal",
             "Panchkula",
             "Panipat",
             "Rewari",
             "Rohtak",
             "Sirsa",
             "Sonipat",
             "Yamunanagar"
          ]
       },
       {  
          "state":"Himachal Pradesh",
          "Himachal Pradesh":[  
             "Bilaspur",
             "Chamba",
             "Hamirpur",
             "Kangra",
             "Kinnaur",
             "Kullu",
             "Lahaul &amp; Spiti",
             "Mandi",
             "Shimla",
             "Sirmaur (Sirmour)",
             "Solan",
             "Una"
          ]
       },
       {  
          "state":"Jammu and Kashmir",
          "Jammu and Kashmir":[  
             "Anantnag",
             "Bandipore",
             "Baramulla",
             "Budgam",
             "Doda",
             "Ganderbal",
             "Jammu",
             "Kargil",
             "Kathua",
             "Kishtwar",
             "Kulgam",
             "Kupwara",
             "Leh",
             "Poonch",
             "Pulwama",
             "Rajouri",
             "Ramban",
             "Reasi",
             "Samba",
             "Shopian",
             "Srinagar",
             "Udhampur"
          ]
       },
       {  
          "state":"Jharkhand",
          "Jharkhand":[  
             "Bokaro",
             "Chatra",
             "Deoghar",
             "Dhanbad",
             "Dumka",
             "East Singhbhum",
             "Garhwa",
             "Giridih",
             "Godda",
             "Gumla",
             "Hazaribag",
             "Jamtara",
             "Khunti",
             "Koderma",
             "Latehar",
             "Lohardaga",
             "Pakur",
             "Palamu",
             "Ramgarh",
             "Ranchi",
             "Sahibganj",
             "Seraikela-Kharsawan",
             "Simdega",
             "West Singhbhum"
          ]
       },
       {  
          "state":"Karnataka",
          "Karnataka":[  
             "Bagalkot",
             "Ballari",
             "Belagavi",
             "Bengaluru",
             "Bidar",
             "Chamarajanagar",
             "Chikballapur",
             "Chikkamagaluru",
             "Chitradurga",
             "Dakshina Kannada",
             "Davangere",
             "Dharwad",
             "Gadag",
             "Hassan",
             "Haveri",
             "Kalaburagi",
             "Kodagu",
             "Kolar",
             "Koppal",
             "Mandya",
             "Mysuru",
             "Raichur",
             "Ramanagara",
             "Shivamogga",
             "Tumakuru",
             "Udupi",
             "Karwar",
             "Bijapur",
             "Yadgir"
          ]
       },
       {  
          "state":"Kerala",
          "Kerala":[  
             "Alappuzha",
             "Ernakulam",
             "Idukki",
             "Kannur",
             "Kasaragod",
             "Kollam",
             "Kottayam",
             "Kozhikode",
             "Malappuram",
             "Palakkad",
             "Pathanamthitta",
             "Thiruvananthapuram",
             "Thrissur",
             "Wayanad"
          ]
       },
       {  
          "state":"Lakshadweep (UT)",
          "Lakshadweep (UT)":[  
             "Agatti",
             "Amini",
             "Androth",
             "Bithra",
             "Chethlath",
             "Kavaratti",
             "Kadmath",
             "Kalpeni",
             "Kilthan",
             "Minicoy"
          ]
       },
       {  
          "state":"Madhya Pradesh",
          "Madhya Pradesh":[  
             "Agar Malwa",
             "Alirajpur",
             "Anuppur",
             "Ashoknagar",
             "Balaghat",
             "Barwani",
             "Betul",
             "Bhind",
             "Bhopal",
             "Burhanpur",
             "Chhatarpur",
             "Chhindwara",
             "Damoh",
             "Datia",
             "Dewas",
             "Dhar",
             "Dindori",
             "Guna",
             "Gwalior",
             "Harda",
             "Hoshangabad",
             "Indore",
             "Jabalpur",
             "Jhabua",
             "Katni",
             "Khandwa",
             "Khargone",
             "Mandla",
             "Mandsaur",
             "Morena",
             "Narsinghpur",
             "Neemuch",
             "Panna",
             "Raisen",
             "Rajgarh",
             "Ratlam",
             "Rewa",
             "Sagar",
             "Satna",
             "Sehore",
             "Seoni",
             "Shahdol",
             "Shajapur",
             "Sheopur",
             "Shivpuri",
             "Sidhi",
             "Singrauli",
             "Tikamgarh",
             "Ujjain",
             "Umaria",
             "Vidisha"
          ]
       },
       {  
          "state":"Maharashtra",
          "Maharashtra":[  
             "Ahmednagar",
             "Akola",
             "Amravati",
             "Aurangabad",
             "Beed",
             "Bhandara",
             "Buldhana",
             "Chandrapur",
             "Dhule",
             "Gadchiroli",
             "Gondia",
             "Hingoli",
             "Jalgaon",
             "Jalna",
             "Kolhapur",
             "Latur",
             "Mumbai",
             "Mumbai Suburban",
             "Nagpur",
             "Nanded",
             "Nandurbar",
             "Nashik",
             "Osmanabad",
             "Palghar",
             "Parbhani",
             "Pune",
             "Raigad",
             "Ratnagiri",
             "Sangli",
             "Satara",
             "Sindhudurg",
             "Solapur",
             "Thane",
             "Wardha",
             "Washim",
             "Yavatmal"
          ]
       },
       {  
          "state":"Manipur",
          "Manipur":[  
             "Bishnupur",
             "Chandel",
             "Churachandpur",
             "Imphal East",
             "Imphal West",
             "Jiribam",
             "Kakching",
             "Kamjong",
             "Kangpokpi",
             "Noney",
             "Pherzawl",
             "Senapati",
             "Tamenglong",
             "Tengnoupal",
             "Thoubal",
             "Ukhrul"
          ]
       },
       {  
          "state":"Meghalaya",
          "Meghalaya":[  
             "East Garo Hills",
             "East Jaintia Hills",
             "East Khasi Hills",
             "North Garo Hills",
             "Ri Bhoi",
             "South Garo Hills",
             "South West Garo Hills ",
             "South West Khasi Hills",
             "West Garo Hills",
             "West Jaintia Hills",
             "West Khasi Hills"
          ]
       },
       {  
          "state":"Mizoram",
          "Mizoram":[  
             "Aizawl",
             "Champhai",
             "Kolasib",
             "Lawngtlai",
             "Lunglei",
             "Mamit",
             "Saiha",
             "Serchhip"
          ]
       },
       {  
          "state":"Nagaland",
          "Nagaland":[  
             "Dimapur",
             "Kiphire",
             "Kohima",
             "Longleng",
             "Mokokchung",
             "Mon",
             "Peren",
             "Phek",
             "Tuensang",
             "Wokha",
             "Zunheboto"
          ]
       },
       {  
          "state":"Odisha",
          "Odisha":[  
             "Angul",
             "Balangir",
             "Balasore",
             "Bargarh",
             "Bhadrak",
             "Boudh",
             "Cuttack",
             "Deogarh",
             "Dhenkanal",
             "Gajapati",
             "Ganjam",
             "Jagatsinghapur",
             "Jajpur",
             "Jharsuguda",
             "Kalahandi",
             "Kandhamal",
             "Kendrapara",
             "Kendujhar (Keonjhar)",
             "Khordha",
             "Koraput",
             "Malkangiri",
             "Mayurbhanj",
             "Nabarangpur",
             "Nayagarh",
             "Nuapada",
             "Puri",
             "Rayagada",
             "Sambalpur",
             "Sonepur",
             "Sundargarh"
          ]
       },
       {  
          "state":"Puducherry (UT)",
          "Puducherry (UT)":[  
             "Karaikal",
             "Mahe",
             "Pondicherry",
             "Yanam"
          ]
       },
       {  
          "state":"Punjab",
          "Punjab":[  
             "Amritsar",
             "Barnala",
             "Bathinda",
             "Faridkot",
             "Fatehgarh Sahib",
             "Fazilka",
             "Ferozepur",
             "Gurdaspur",
             "Hoshiarpur",
             "Jalandhar",
             "Kapurthala",
             "Ludhiana",
             "Mansa",
             "Moga",
             "Muktsar",
             "Nawanshahr (Shahid Bhagat Singh Nagar)",
             "Pathankot",
             "Patiala",
             "Rupnagar",
             "Sahibzada Ajit Singh Nagar (Mohali)",
             "Sangrur",
             "Tarn Taran"
          ]
       },
       {  
          "state":"Rajasthan",
          "Rajasthan":[  
             "Ajmer",
             "Alwar",
             "Banswara",
             "Baran",
             "Barmer",
             "Bharatpur",
             "Bhilwara",
             "Bikaner",
             "Bundi",
             "Chittorgarh",
             "Churu",
             "Dausa",
             "Dholpur",
             "Dungarpur",
             "Hanumangarh",
             "Jaipur",
             "Jaisalmer",
             "Jalore",
             "Jhalawar",
             "Jhunjhunu",
             "Jodhpur",
             "Karauli",
             "Kota",
             "Nagaur",
             "Pali",
             "Pratapgarh",
             "Rajsamand",
             "Sawai Madhopur",
             "Sikar",
             "Sirohi",
             "Sri Ganganagar",
             "Tonk",
             "Udaipur"
          ]
       },
       {  
          "state":"Sikkim",
          "Sikkim":[  
             "East Sikkim",
             "North Sikkim",
             "South Sikkim",
             "West Sikkim"
          ]
       },
       {  
          "state":"Tamil Nadu",
          "Tamil Nadu":[  
             "Ariyalur",
             "Chennai",
             "Coimbatore",
             "Cuddalore",
             "Dharmapuri",
             "Dindigul",
             "Erode",
             "Kanchipuram",
             "Kanyakumari",
             "Karur",
             "Krishnagiri",
             "Madurai",
             "Nagapattinam",
             "Namakkal",
             "Nilgiris",
             "Perambalur",
             "Pudukkottai",
             "Ramanathapuram",
             "Salem",
             "Sivaganga",
             "Thanjavur",
             "Theni",
             "Thoothukudi (Tuticorin)",
             "Tiruchirappalli",
             "Tirunelveli",
             "Tiruppur",
             "Tiruvallur",
             "Tiruvannamalai",
             "Tiruvarur",
             "Vellore",
             "Viluppuram",
             "Virudhunagar"
          ]
       },
       {  
          "state":"Telangana",
          "Telangana":[  
             "Adilabad",
             "Bhadradri Kothagudem",
             "Hyderabad",
             "Jagtial",
             "Jangaon",
             "Jayashankar Bhoopalpally",
             "Jogulamba Gadwal",
             "Kamareddy",
             "Karimnagar",
             "Khammam",
             "Komaram Bheem Asifabad",
             "Mahabubabad",
             "Mahabubnagar",
             "Mancherial",
             "Medak",
             "Medchal",
             "Nagarkurnool",
             "Nalgonda",
             "Nirmal",
             "Nizamabad",
             "Peddapalli",
             "Rajanna Sircilla",
             "Rangareddy",
             "Sangareddy",
             "Siddipet",
             "Suryapet",
             "Vikarabad",
             "Wanaparthy",
             "Warangal (Rural)",
             "Warangal (Urban)",
             "Yadadri Bhuvanagiri"
          ]
       },
       {  
          "state":"Tripura",
          "Tripura":[  
             "Dhalai",
             "Gomati",
             "Khowai",
             "North Tripura",
             "Sepahijala",
             "South Tripura",
             "Unakoti",
             "West Tripura"
          ]
       },
       {  
          "state":"Uttarakhand",
          "Uttarakhand":[  
             "Almora",
             "Bageshwar",
             "Chamoli",
             "Champawat",
             "Dehradun",
             "Haridwar",
             "Nainital",
             "Pauri Garhwal",
             "Pithoragarh",
             "Rudraprayag",
             "Tehri Garhwal",
             "Udham Singh Nagar",
             "Uttarkashi"
          ]
       },
       {  
          "state":"Uttar Pradesh",
          "Uttar Pradesh":[  
             "Agra",
             "Aligarh",
             "Allahabad",
             "Ambedkar Nagar",
             "Amethi (Chatrapati Sahuji Mahraj Nagar)",
             "Amroha (J.P. Nagar)",
             "Auraiya",
             "Azamgarh",
             "Baghpat",
             "Bahraich",
             "Ballia",
             "Balrampur",
             "Banda",
             "Barabanki",
             "Bareilly",
             "Basti",
             "Bhadohi",
             "Bijnor",
             "Budaun",
             "Bulandshahr",
             "Chandauli",
             "Chitrakoot",
             "Deoria",
             "Etah",
             "Etawah",
             "Faizabad",
             "Farrukhabad",
             "Fatehpur",
             "Firozabad",
             "Gautam Buddha Nagar",
             "Ghaziabad",
             "Ghazipur",
             "Gonda",
             "Gorakhpur",
             "Hamirpur",
             "Hapur (Panchsheel Nagar)",
             "Hardoi",
             "Hathras",
             "Jalaun",
             "Jaunpur",
             "Jhansi",
             "Kannauj",
             "Kanpur Dehat",
             "Kanpur Nagar",
             "Kanshiram Nagar (Kasganj)",
             "Kaushambi",
             "Kushinagar (Padrauna)",
             "Lakhimpur - Kheri",
             "Lalitpur",
             "Lucknow",
             "Maharajganj",
             "Mahoba",
             "Mainpuri",
             "Mathura",
             "Mau",
             "Meerut",
             "Mirzapur",
             "Moradabad",
             "Muzaffarnagar",
             "Pilibhit",
             "Pratapgarh",
             "RaeBareli",
             "Rampur",
             "Saharanpur",
             "Sambhal (Bhim Nagar)",
             "Sant Kabir Nagar",
             "Shahjahanpur",
             "Shamali (Prabuddh Nagar)",
             "Shravasti",
             "Siddharth Nagar",
             "Sitapur",
             "Sonbhadra",
             "Sultanpur",
             "Unnao",
             "Varanasi"
          ]
       },
       {  
          "state":"West Bengal",
          "West Bengal":[  
             "Alipurduar",
             "Bankura",
             "Birbhum",
             "Burdwan (Bardhaman)",
             "Cooch Behar",
             "Dakshin Dinajpur (South Dinajpur)",
             "Darjeeling",
             "Hooghly",
             "Howrah",
             "Jalpaiguri",
             "Kalimpong",
             "Kolkata",
             "Malda",
             "Murshidabad",
             "Nadia",
             "North 24 Parganas",
             "Paschim Medinipur (West Medinipur)",
             "Purba Medinipur (East Medinipur)",
             "Purulia",
             "South 24 Parganas",
             "Uttar Dinajpur (North Dinajpur)"
          ]
       }
    ]
 }


  constructor() { }

  ngOnInit(): void {
  }


  getStateIndex(state:string){
    for (let index = 0; index < this.regionData.states.length; index++) {

      if(this.regionData.states[index]['state'] == state){
        return index;
      }
    }
  }

  

  setState(state:string){
    this.stateSelect = state;
    this.districtSelect = [];

   if(state != ""){
      let districtNameArray = this.regionData.states[this.getStateIndex(state)][this.stateSelect];
    
    for (let index = 0; index < districtNameArray.length; index++) {
         this.districtSelect.push(districtNameArray[index]);
        
    }
    
   }else{
      this.stateEmit.emit("");
      this.districtEmit.emit("");
      this.change.emit(false);
   }
    
  
  }

  setDistrict(district:string){
    this.stateEmit.emit(this.stateSelect);
    this.districtEmit.emit(district);
    this.change.emit(false);
  }

  getDistricts(){
    // console.log("Hello",this.districtSelect);
     if(this.districtSelect.length == 0){

      let distNameArr =this.regionData.states[0]["Andhra Pradesh"]

         distNameArr.forEach(element => {
            this.districtSelect.push(element);   
         });
         
     }else{
      return this.districtSelect;
     }
     
  }

}
