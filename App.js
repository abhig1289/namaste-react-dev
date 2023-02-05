import axios from "axios";
import { minify } from "csso";
import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Header from "./Header";
// HMR- Hot Module Replacement
// Created a Server
// File watch algorithm -C++
// Bundling
// minify
// cleaning our coding
// Dev and Production
// Tree Shaking=removing unwanted code
// Super fast build algorithm
// Image Optimization
//Caching by development
// Compression
// Compatible with older versions of Chrome
// HTTPS on dev
//  Port number
// Consistent Hashing algoritm
// Zero config
//
//
//
// Transitive dependencies

//     JSX      =>        React.createElement       ===         Object        =>     HTML(DOM)
// const heading = React.createElement(
//   "h1",
//   {
//     id: "title",
//     className: "title",
//     key: "h1",
//   },
//   "Namaste Abhilash"
// );
// const heading1 = React.createElement(
//   "h1",
//   {
//     id: "title1",
//     className: "title1",
//     key: "h2",
//   },
//   "Namaste Abhilash 1"
// );
// // React.createElement is an object
// const heading2 = React.createElement(
//   "h1",
//   {
//     id: "title2",
//     className: "title2",
//     key: "h3",
//   },
//   "Namaste Abhilash g 2"
// );

// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//     key: "head",
//   },
//   [React.createElement(
//     "h1",
//     {
//       id: "title",
//       className: "title",
//       key: "h1",
//     },
//     "Heading 1 of the project"
//   ), React.createElement(
//     "ul",
//     {
//     },
//    [React.createElement(
//     "li",
//     {
//       id: "title",
//       className: "title",
//       key: "h1",
//     },
//     "Li element 1"
//   ),  React.createElement(
//     "li",
//     {
//       id: "title",
//       className: "title",
//       key: "h1",
//     },
//     "Li Element 2"
//   )]
//   )]
// );
//Jsx is html like syntax
// -------------------------------------App Layout ----------------------------------------------------------------
// Header
//     -Logo
//     -Nav listItems
//     -Cart
// Body
//     -SearchBar
//     -RestauranList
//         -RestaurantCard
//             -Image
//             -Name
//             -Rating
//             -Cuisines
// Footer
//      -links and copyright
const styleObj = {
    backgroundColor:'green',
}
const jsxHeading = (
    // inline styling
  <h1 id="title" style={{backgroundColor:'red'}}key="title key">
    expression aite direct curly brace
  </h1>
);
// const Heading =()=> (
//   <h1 id="title" key="title key11">
//     Function aite call cheyali
//   </h1>
// );
const Title = () => (
  //   <h1 id="title" key="title key11">
  //  Daaaa Tinu
  //   </h1>
  <a href="/">
    <img
      src="http://wirally.com/wp-content/uploads/2019/01/3-daa-tinu.jpg"
      alt="logo"
      className="logo"
    />
  </a>
);
// React Component
// Class Component
// Functional Component
// Functional Name start with Capital Letter -Non-mandatory
// returns JSX element/React element

const string = "xyz";
// const data =api.getData()
const HeaderComponent = () => {
  return (
    <div className="header">
      {/* {jsxHeading}
        {Heading()}
        <Heading/> 
        {10+1}<br/>
        {string}
        {console.log(string)}
      <h1>Namaste React Functional Component</h1> */}
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// config driven UI
const config =[
    {
        type:'corousal',
    
    cards:[
       { offerName:'50% off'},
       { offerName:'No Delivery Chaarges%'},
    
    ]
},
{
    type:'restaurants',

cards:[
    {
        name:'Shah gouse',
        image: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ks4d93rjtcbitkzkbqx0',
        cuisine: ['Biryani', 'Hyderabadi'],
        rating:"4.4",
    }
    , 
    {
        name:'Shah gouse',
        image: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ks4d93rjtcbitkzkbqx0',
        cuisine: ['Biryani', 'Hyderabadi'],
        rating:"4.4",
    }
    

]
}
]

const RestauranList =[
    {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "436805",
          "name": "Lucky Multicuisine Restaurant",
          "uuid": "ff39450a-e0b0-440b-8ff4-d5dfe4359dbb",
          "city": "3",
          "area": "Madhapur",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "n2kt3noplim3agty9ox8",
          "cuisines": [
            "Biryani",
            "North Indian",
            "Tandoor",
            "South Indian"
          ],
          "tags": [
            
          ],
          "costForTwo": 40000,
          "costForTwoString": "₹400 FOR TWO",
          "deliveryTime": 21,
          "minDeliveryTime": 21,
          "maxDeliveryTime": 21,
          "slaString": "21 MINS",
          "lastMileTravel": 2.9000000953674316,
          "slugs": {
            "restaurant": "lucky-multicuisine-restaurant-madhapur-madhapur",
            "city": "hyderabad"
          },
          "cityState": "3",
          "address": "1-74/2, Guttalabegumpet, Madhapur, Hyderabad - 500019",
          "locality": "Guttalabegumpet",
          "parentId": 18963,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "Free Sweets",
            "shortDescriptionList": [
              {
                "meta": "Free Sweets on orders above ₹365",
                "discountType": "Freebie",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "Free Sweets on orders above ₹365",
                "discountType": "Freebie",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "60% OFF",
            "shortDescriptionList": [
              {
                "meta": "Free Sweets",
                "discountType": "Freebie",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "Free Sweets on orders above ₹365",
                "discountType": "Freebie",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "distance",
                "fee": 3700,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 3700,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3700",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=5777515~p=1~eid=00000185-e026-29d9-02f5-80d5008b0162",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "2.9 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "436805",
            "deliveryTime": 21,
            "minDeliveryTime": 21,
            "maxDeliveryTime": 21,
            "lastMileTravel": 2.9000000953674316,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "3.5",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "39546",
          "name": "Mehfil",
          "uuid": "4d24b2f1-59ef-41a2-9777-5947b08da1d1",
          "city": "3",
          "area": "Hitec City",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "stnwpjuu5fhehsx1dw4z",
          "cuisines": [
            "Biryani",
            "Chinese",
            "Indian",
            "Kebabs",
            "Tandoor",
            "Desserts"
          ],
          "tags": [
            
          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 19,
          "minDeliveryTime": 19,
          "maxDeliveryTime": 19,
          "slaString": "19 MINS",
          "lastMileTravel": 3.5,
          "slugs": {
            "restaurant": "mehfil-restaurant-madhapur-madhapur",
            "city": "hyderabad"
          },
          "cityState": "3",
          "address": "Jaihind Enclave, Beside Indiblaze, Madhapur, Hyderabad, Telangana 500081",
          "locality": "Jaihind Enclave",
          "parentId": 637,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "10% off",
            "shortDescriptionList": [
              {
                "meta": "10% off | Use MISSEDYOU",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "10% off up to ₹40 | Use code MISSEDYOU",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "10% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use MISSEDYOU",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "10% off up to ₹40 | Use code MISSEDYOU",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 4400,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 4400,
            "message": "",
            "title": "Delivery Charge",
            "amount": "4400",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "3.5 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "39546",
            "deliveryTime": 19,
            "minDeliveryTime": 19,
            "maxDeliveryTime": 19,
            "lastMileTravel": 3.5,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.9",
          "totalRatings": 10000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "1691",
          "name": "Chaitanya Food Court",
          "uuid": "27f87e83-0d8f-4edc-a376-e49aaec1e314",
          "city": "3",
          "area": "Kphb Colony",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "lyzlpgvi7jh12frwvlle",
          "cuisines": [
            "Biryani",
            "Chinese",
            "Andhra",
            "North Indian"
          ],
          "tags": [
            
          ],
          "costForTwo": 60000,
          "costForTwoString": "₹600 FOR TWO",
          "deliveryTime": 32,
          "minDeliveryTime": 32,
          "maxDeliveryTime": 32,
          "slaString": "32 MINS",
          "lastMileTravel": 7.599999904632568,
          "slugs": {
            "restaurant": "chaitanya-food-court-kukatpally",
            "city": "hyderabad"
          },
          "cityState": "3",
          "address": "Near Malaysian Township Circle,JNTU-Hitech City Road,Kphb Colony",
          "locality": "Kukatpally",
          "parentId": 1865,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "40% off",
            "shortDescriptionList": [
              {
                "meta": "40% off | Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "40% off up to ₹80 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "40% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "40% off up to ₹80 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 7500,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 7500,
            "message": "",
            "title": "Delivery Charge",
            "amount": "7500",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 1,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "7.5 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "1691",
            "deliveryTime": 32,
            "minDeliveryTime": 32,
            "maxDeliveryTime": 32,
            "lastMileTravel": 7.599999904632568,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "IT_IS_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.1",
          "totalRatings": 10000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "137034",
          "name": "Shah Ghouse Spl Shawarma",
          "uuid": "6db9d674-565f-472f-a09a-e0789f767fc6",
          "city": "3",
          "area": "Gachibowli",
          "totalRatingsString": "5000+ ratings",
          "cloudinaryImageId": "kmzr7zp4djhuk66wdbsc",
          "cuisines": [
            "Lebanese",
            "Tandoor"
          ],
          "tags": [
            
          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 22,
          "minDeliveryTime": 22,
          "maxDeliveryTime": 22,
          "slaString": "22 MINS",
          "lastMileTravel": 3.799999952316284,
          "slugs": {
            "restaurant": "shah-ghouse-spl-shawarma-gachibowli-gachibowli",
            "city": "hyderabad"
          },
          "cityState": "3",
          "address": "8-191/15, Opposite Bio Diversity Park, Raidurgam, Madhura Nagar Colony, Gachibowli, Hyderabad",
          "locality": "Opposite Bio Diversity Park",
          "parentId": 19255,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "40% off",
            "shortDescriptionList": [
              {
                "meta": "40% off | Use MISSEDYOU",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "40% off up to ₹80 | Use code MISSEDYOU",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "40% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use MISSEDYOU",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "40% off up to ₹80 | Use code MISSEDYOU",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 4400,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 4400,
            "message": "",
            "title": "Delivery Charge",
            "amount": "4400",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "3.7 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "137034",
            "deliveryTime": 22,
            "minDeliveryTime": 22,
            "maxDeliveryTime": 22,
            "lastMileTravel": 3.799999952316284,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.0",
          "totalRatings": 5000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "290680",
          "name": "Chutneys hub",
          "uuid": "0bfc862e-7694-430a-9300-673977bd497a",
          "city": "3",
          "area": "Kukatpally",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "r3nsfltko8u1uj9r81gf",
          "cuisines": [
            "Indian",
            "Biryani"
          ],
          "tags": [
            
          ],
          "costForTwo": 25000,
          "costForTwoString": "₹250 FOR TWO",
          "deliveryTime": 36,
          "minDeliveryTime": 36,
          "maxDeliveryTime": 36,
          "slaString": "36 MINS",
          "lastMileTravel": 9,
          "slugs": {
            "restaurant": "chutneys-hub-kukatpally-kukatpally",
            "city": "hyderabad"
          },
          "cityState": "3",
          "address": "plot no 1-146,Beside sri sai batmentan court,80ft road,  gokul Plots,  Kphb 9th phase, Hyderabad,  Pin : 500072",
          "locality": "Kphb 9th phase",
          "parentId": 19382,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "10% off",
            "shortDescriptionList": [
              {
                "meta": "10% off | Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "10% off up to ₹40 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "10% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "10% off up to ₹40 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 8400,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 8400,
            "message": "",
            "title": "Delivery Charge",
            "amount": "8400",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 1,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "9 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "290680",
            "deliveryTime": 36,
            "minDeliveryTime": 36,
            "maxDeliveryTime": 36,
            "lastMileTravel": 9,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "IT_IS_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.0",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "388128",
          "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
          "uuid": "0a4f86e7-05e8-4893-98ea-afb13e128ba3",
          "city": "3",
          "area": "Gachibowli",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "lq6klhkamh7qzitpzcbm",
          "cuisines": [
            "Desserts",
            "Ice Cream",
            "Ice Cream Cakes"
          ],
          "tags": [
            
          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 20,
          "minDeliveryTime": 20,
          "maxDeliveryTime": 20,
          "slaString": "20 MINS",
          "lastMileTravel": 3.5,
          "slugs": {
            "restaurant": "kwality-walls-frozen-dessert-and-ice-cream-shop-gachibowli-gachibowli-2",
            "city": "hyderabad"
          },
          "cityState": "3",
          "address": "VANDANAPU KIRAN KUMAR: 1-75/5/P/79/1, GACHIBOWLI VILLAGE, GACHIBOWLI HYDERABAD, HYDERABAD-WEST ZONE, TELENGANA-500032",
          "locality": "GACHIBOWLI VILLAGE",
          "parentId": 582,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 4200,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 4200,
            "message": "",
            "title": "Delivery Charge",
            "amount": "4200",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=5772064~p=7~eid=00000185-e026-29d9-02f5-80d7008b072b",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "3.5 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "388128",
            "deliveryTime": 20,
            "minDeliveryTime": 20,
            "maxDeliveryTime": 20,
            "lastMileTravel": 3.5,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.6",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "34634",
          "name": "Shah Ghouse Cafe & Restaurant",
          "uuid": "b01410a9-830a-45c8-b128-7358eea26f5b",
          "city": "3",
          "area": "Tolichowki",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "ks4d93rjtcbitkzkbqx0",
          "cuisines": [
            "Biryani",
            "North Indian",
            "Chinese",
            "Mughlai",
            "Tandoor"
          ],
          "tags": [
            
          ],
          "costForTwo": 35000,
          "costForTwoString": "₹350 FOR TWO",
          "deliveryTime": 33,
          "minDeliveryTime": 33,
          "maxDeliveryTime": 33,
          "slaString": "33 MINS",
          "lastMileTravel": 8.699999809265137,
          "slugs": {
            "restaurant": "shah-ghouse-cafe-restaurant-tolichowki-tolichowki",
            "city": "hyderabad"
          },
          "cityState": "3",
          "address": "Opposite SA Imperial Gardens, Near RTA Office, Tolichowki, Hyderabad",
          "locality": "Tolichowki",
          "parentId": 18992,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "20% off",
            "shortDescriptionList": [
              {
                "meta": "20% off | Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "20% off up to ₹50 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "20% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "20% off up to ₹50 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 8400,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 8400,
            "message": "",
            "title": "Delivery Charge",
            "amount": "8400",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 1,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "8.6 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "34634",
            "deliveryTime": 33,
            "minDeliveryTime": 33,
            "maxDeliveryTime": 33,
            "lastMileTravel": 8.699999809265137,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "IT_IS_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.1",
          "totalRatings": 10000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "245816",
          "name": "Naaz Mandi",
          "uuid": "7b9f2f1d-ea19-46b1-8f3d-26d65db4c770",
          "city": "3",
          "area": "Madhapur",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "uqukcggimlmhygkkivyx",
          "cuisines": [
            "Arabian",
            "Indian",
            "Tandoor",
            "Chinese"
          ],
          "tags": [
            
          ],
          "costForTwo": 50000,
          "costForTwoString": "₹500 FOR TWO",
          "deliveryTime": 28,
          "minDeliveryTime": 28,
          "maxDeliveryTime": 28,
          "slaString": "28 MINS",
          "lastMileTravel": 3,
          "slugs": {
            "restaurant": "naaz-biryani-kukatpally-kukatpally",
            "city": "hyderabad"
          },
          "cityState": "3",
          "address": "Plot no.1&2 , Survey No-64P, 1st Floor , Rohini Layout Rd ,Opp. Shilparaman, HITEC City, madhapur, Telangana 500081",
          "locality": "HITEC City",
          "parentId": 359330,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "distance",
                "fee": 4400,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 4400,
            "message": "",
            "title": "Delivery Charge",
            "amount": "4400",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=5647048~p=10~eid=00000185-e026-29d9-02f5-80d8008b0a0e",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "3 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "245816",
            "deliveryTime": 28,
            "minDeliveryTime": 28,
            "maxDeliveryTime": 28,
            "lastMileTravel": 3,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "3.8",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "33040",
          "name": "Shah Ghouse Hotel & Restaurant",
          "uuid": "202db6b9-d595-449c-bd97-0610ca334157",
          "city": "3",
          "area": "Hitec City",
          "totalRatingsString": "5000+ ratings",
          "cloudinaryImageId": "hnx9nazpxdpqpypjo8ld",
          "cuisines": [
            "Biryani",
            "North Indian",
            "Chinese",
            "Mughlai",
            "Tandoor"
          ],
          "tags": [
            
          ],
          "costForTwo": 35000,
          "costForTwoString": "₹350 FOR TWO",
          "deliveryTime": 22,
          "minDeliveryTime": 22,
          "maxDeliveryTime": 22,
          "slaString": "22 MINS",
          "lastMileTravel": 3.799999952316284,
          "slugs": {
            "restaurant": "shah-ghouse-hotel-restaurant-gachibowli-gachibowli",
            "city": "hyderabad"
          },
          "cityState": "3",
          "address": "Near Rai Durgam Police Station, Gachibowli Main Road, Gachibowli, Hyderabad",
          "locality": "Bio-Diversity Park",
          "parentId": 19271,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "20% off",
            "shortDescriptionList": [
              {
                "meta": "20% off | Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "20% off up to ₹50 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "20% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "20% off up to ₹50 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "distance",
                "fee": 4400,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 4400,
            "message": "",
            "title": "Delivery Charge",
            "amount": "4400",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "3.7 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "33040",
            "deliveryTime": 22,
            "minDeliveryTime": 22,
            "maxDeliveryTime": 22,
            "lastMileTravel": 3.799999952316284,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.0",
          "totalRatings": 5000,
          "new": false
        },
        "subtype": "basic"
      },
]

const ShahGouse ={
    name:'Shah gouse',
    image: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ks4d93rjtcbitkzkbqx0',
    cuisine: ['Biryani', 'Hyderabadi'],
    rating:"4.4",
}

const RestaurantCard=({name, cuisines, cloudinaryImageId, lastMileTravel})=>{
    // console.log(restaurant,'pppppppppppppppppppppp')
    // const {name, cuisines, cloudinaryImageId, lastMileTravel} = restaurant?.data;
    return(
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ cloudinaryImageId} alt="restaurant card"/>
            <h2>{name}</h2>
            <h3>{cuisines.join(",")}</h3>
            <h4>{lastMileTravel} stars</h4>
        </div>
    )
}
//props === properties
// no key <<<<<<<<<<<<<<<<< index key << unique key
const Body = () => {
  return (
    <div className="restaurant-list">
        {/* <RestaurantCard 
        // restaurant={RestauranList[0]}
        {...RestauranList[0].data}
        /> */}
    {
        RestauranList.map((restaurant,index)=>{
          return  <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
        })
    }
        {/* <RestaurantCard restaurant={RestauranList[1]}/> */}

    </div>
  );
};

const Footer = () => {
  return <>Footer</>;
};

const AppLayout = () => {
  const [data1,setData1]=useState({})
  
// async function getRestaurantsCardsData(){
//   // await axios.get('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4660807&lng=78.36573419999999&page_type=DESKTOP_WEB_LISTING')
//   // .then(res=>console.log(res?.data))
//   // .catch(err=>console.log(err))


//   const data= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4660807&lng=78.36573419999999&page_type=DESKTOP_WEB_LISTING')
// const json=await data.json();
// console.log(json)
// }

useEffect(()=>{
  async function getRestaurantsCardsData(){
    // await axios.get('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4660807&lng=78.36573419999999&page_type=DESKTOP_WEB_LISTING')
    // .then(res=>console.log(res?.data))
    // .catch(err=>console.log(err))
  
  
    const data= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4660807&lng=78.36573419999999&page_type=DESKTOP_WEB_LISTING')
  const json=await data.json();
  console.log(json)
  setData1(json)
  }},
  getRestaurantsCardsData(),
[])

  return (
    //React.Fragment === component exported by react <React.Fragment/>===<></>
    //JSX expression must have only one parent component
    <React.Fragment>
      <HeaderComponent />
      <Body />
      {data1}
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// passing the react element inside the root
// root.render(heading)
// root.render(jsxHeading);
root.render(<AppLayout />);
// root.render(<Header />);