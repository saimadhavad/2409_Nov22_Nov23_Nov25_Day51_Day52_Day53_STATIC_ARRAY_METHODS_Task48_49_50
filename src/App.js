import { useEffect, useRef } from 'react';
import './App.css';
import TenthStudent from './classes/TenthStudent';

function App() {

  // ARRAY CREATION-1
  const vegetables =[];
  vegetables.push("Tomato");
  vegetables.push("Lady’s finger");
  vegetables.push("Beans");
  vegetables.push("Onion");
  vegetables.push("Carrot");
  vegetables.push("Beetroot");
  vegetables.push("Cauliflower");

  // ARRAY CREATION-2
  const fruits = new Array();
  fruits.unshift("Apple");
  fruits.unshift("Banana");
  fruits.unshift("Mango");
  fruits.unshift("Watermelon");
  fruits.unshift("Pineapple");
  fruits.unshift("Coconut");
  fruits.unshift("Pomegranate");


  // ARRAY CREATION-3
  const programmingSkills =["Machine learning","Python","SQL","PHP","Full Stack","Cyber Security",
    "Microsoft .Net","PowerBI","Cloud Computing","Java","C","C++"];

    const programmingSkillsWithLogos =[{name:"Machine learning",image:"./images/machine-learning.png"},
      {name:"Python",image:"./images/python.png"},
      {name:"SQL",image:"./images/sql.png"},
      {name:"PHP",image:"./images/php.png"},
      {name:"Full Stack",image:"./images/full-stack.png"},
      {name:"Cyber Security",image:"./images/cyber-security.png"},
      {name:"Microsoft .Net",image:"./images/dot-net.png"},
      {name:"PowerBI",image:"./images/power-bi.png"},
      {name:"Cloud Computing",image:"./images/cloud-computing.png"},
      {name:"Java",image:"./images/java.png"},
      {name:"C",image:"./images/c-programming.png"},
      {name:"C++",image:"./images/cPlusPlus.png"}
    ];


    const megaFamily = ["Chiranjeevi",["Sushmita Konidela","Sreeja","Ram Charan"],
                        ["Nagendra Babu",["Varun Tej","Niharika"]],
                        ["Pawan Kalyan",["Akira Nandan","Aadya","Polena","Mark Shankar Pawanovich"]],
                        ["Vijaya Durga",["Sai Durgha Tej","Panja Vaishnav Tej"]]
                      ];

  let headingOneResultRef = useRef();
  useEffect( ()=> {
    headingOneResultRef.current.innerHTML =`Programming Skills - MAP()`;
  },[])
 

  return (
    <div className="App">
      <h1>STATIC, ARRAY METHODS</h1>

      {/* STATIC */}
      <div>
        <h2>STATIC</h2>
        <button type="button" onClick={ () => {
           let sm = new TenthStudent();
           sm.teluguMarks = 81;
           sm.hindiMarks = 82;
           sm.englishMarks = 83;
           sm.mathsMarks = 84;
           sm.scienceMarks = 85;
           sm.socialMarks = 86;
         
           //static syntax - classname+propertyname
           console.log(`STUDENT PASSMARKS : ${TenthStudent.passMarks}`);
         
           //CALCULATE RESULT
           sm.calculateResult();
        }}>STATIC</button>
      </div>
      <hr/>

      {/* ARRAY METHODS - NOV22 */}
      {/* BASIC ARRAY METHODS */}
        <div>
          <h2>BASIC ARRAY METHODS </h2>

          {/* LENGTH METHOD */}
          <button type="button" onClick={ () => {
              console.clear();
              console.log("length() ::");
              console.log(programmingSkills);
              console.log(`ARRAY LENGTH :${programmingSkills.length}`);
              console.log(`SKILL : ${programmingSkills[5]}`);
              console.log('Programming Skills :')
              console.log(programmingSkills[0]);
              console.log(programmingSkills[1]);
              console.log(programmingSkills[2]);
              console.log(programmingSkills[3]);
              console.log(programmingSkills[4]);
              console.log(programmingSkills[5]);
              console.log(programmingSkills[6]);
              console.log(programmingSkills[7]);
              console.log(programmingSkills[8]);
              console.log(programmingSkills[9]);

              // ADDED 2 MORE SKILLS - C,C++
              console.log("After adding two more Skills ::")
              for(let i=0; i<programmingSkills.length; i++) {
                console.log(programmingSkills[i]);
              }
          }}>length()</button>

          {/* AT METHOD */}
          <button type="button" onClick={ () => {
            console.clear();
            console.log("at() ::");
            console.log(`WITHOUT USING AT : ${programmingSkills[3]}`);
            console.log(`USING AT : ${programmingSkills.at(3)}`);
          }}>at()</button>

          {/* TOSTRING & JOIN METHODS */}
          <button type="button" onClick={ () => {
            console.clear();
            console.log("toString() & join() ::");
            console.log(programmingSkills);
            console.log(`toString() ::`)
            console.log(programmingSkills.toString());
            console.log('-----------------------------------');
            console.log(programmingSkills);
            console.log(`join() ::`)
            console.log(programmingSkills.join());
            console.log('-----------------------------------');
            console.log(`join() :: GIVING SEPARATOR`)
            console.log(programmingSkills.join(" <==> "));

          }}>toString & join()</button>

          {/* POP, PUSH, SHIFT, UNSHIFT & SPLICE METHODS */}
          {/* PUSH */}
          <button type="button" onClick={ () => {
             console.clear();
             console.log("PUSH() ::");
             console.log(vegetables);
             console.log(`Push : ${vegetables.push("Potato")}`);
             console.log(vegetables);
          }}>push()</button>
          {/* POP */}
          <button type="button" onClick={ () => {
            console.clear();
            console.log("POP() ::");
            console.log(vegetables);
            console.log(`POP : ${vegetables.pop()}`);
            console.log(vegetables);
          }}>pop()</button>
          {/* UNSHIFT */}
          <button type="button" onClick={ () => {
             console.clear();
             console.log("UNSHIFT() ::");
             console.log(fruits);
             console.log(`SHIFT : ${fruits.unshift(`Orange`)}`);
             console.log(fruits);
            
          }}>unshift()</button>            
          {/* SHIFT */}
          <button type="button" onClick={ () => {
             console.clear();
             console.log("SHIFT() ::");
             console.log(fruits);
             console.log(`SHIFT : ${fruits.shift()}`);
             console.log(fruits);

          }}>shift()</button>
          {/* SPLICE METHOD */}
          <button type="button" onClick={ () => {
            console.clear();
            console.log("SPLICE() ::");

            // SPLICE - DELETE METHOD - 1
            console.log(fruits);
            console.log(`SPLICE  DELETE: ${fruits.splice(2,3)}`);
            console.log(fruits);

            // SPLICE ADD
            console.log(`SPLICE  ADD: ${fruits.splice(2,3,"Lemon","Grapes","Papaya")}`);
            console.log(fruits);

            // SPLICE - DELETE METHOD - 2
            console.log(vegetables);
            vegetables.splice(vegetables.length-1,1);
            console.log(vegetables);
          }}>splice()</button>

          {/* CONCAT METHOD */}
          <button type="button" onClick={ () => {
            console.clear();
            console.log("CONCAT() ::");
            console.log(`FRUITS : ${fruits}`);
            console.log(`VEGETABLES : ${vegetables}`);
            console.log(`FOOD ITEMS : ${fruits.concat(vegetables)}`)
          }}>concat()</button>
        </div>
        <hr/>

      {/* ARRAY METHODS 2 - NOV23 */}
      <div>
          <h2>ARRAY METHODS - 2</h2>
          
           {/* SPREAD CONCAT METHOD */}
           <button type="button" onClick={ () => {
            console.clear();
            console.log("CONCAT() ::");
            console.log(`FRUITS : ${fruits}`);
            console.log(`VEGETABLES : ${vegetables}`);
            console.log(`FOOD ITEMS - CONCAT : `);
            console.log(fruits.concat(vegetables));
            console.log(`FOOD ITEMS - SPERAD OPERATOR :`);
            console.log([...fruits,...vegetables]);
          }}>spreadOperator()</button>

           {/* DELETE - STATIC */}
           <button type="button" onClick={ () => {
            console.clear();
            console.log("DELETE ::");
            console.log(programmingSkills);
            delete programmingSkills[8];
            console.log(programmingSkills);
            console.log("NOT RECOMMEND TO USE - INSTEAD USE POP() SHIFT() & SPLICE() METHODS");
            console.log("USING SPLICE : ")
            programmingSkills.splice(8,1);
            console.log(programmingSkills);
          }}>delete</button>
          
          {/* FLAT METHOD */}
          <button type="button" onClick={ () => {
            // console.clear();
            console.log("FLAT ::");
            console.log(megaFamily);
            console.log(megaFamily.flat(1));
            console.log(megaFamily.flat(4));
            
          }}>flat()</button>

          {/* SLICE METHOD */}
          <button type="button" onClick={ () => {
            console.clear();
            console.log("SLICE ::");
            console.log(programmingSkills);
            // console.log(programmingSkills.length);
            console.log(`Slice : ${programmingSkills.slice(6,8)}`)
            console.log(programmingSkills);
          }}>slice()</button>

          {/* FILL METHOD */}
          <button type="button" onClick={ () => {
            console.clear();
            console.log("FILL ::");
            console.log(programmingSkills);
            // console.log(programmingSkills.length);
            console.log(`Fill : ${programmingSkills.fill("JAVA",6)}`);
            console.log(programmingSkills);
            console.log(`Fill : ${programmingSkills.fill("AI",2,4)}`);
          }}>fill()</button>

          {/* FROM STATIC */}
          <button type="button" onClick={ () => {
            console.clear();
            console.log("FROM :: STRING to ARRAY");
            let myName = "Sai Madhava";
            let myNameResult = Array.from(myName);
            console.log(`STRING : ${myName}`);
            console.log("ARRAY :")
            console.log(myNameResult);
          }}>from()</button>

          {/* INCLUDES METHOD */}
          <button type="button" onClick={ () => {
            console.clear();
            console.log("INCLUDES ::");
            console.log(programmingSkills);
            console.log(`includes (Java): ${programmingSkills.includes("Java")}`);
            console.log(`includes (AI): ${programmingSkills.includes("AI")}`);            
          }}>includes()</button>

          {/* INDEXOF METHOD */}
          <button type="button" onClick={ () => {
            console.clear();
            console.log("INDEX OF ::");
            console.log(programmingSkills);
            console.log(`Index of : ${programmingSkills.indexOf("Java")}`)     
          }}>indexOf()</button>

          {/* LAST INDEX OF METHOD */}
          <button type="button" onClick={ () => {
            console.clear();
            console.log("INDEX OF ::");
            console.log(programmingSkills);
            programmingSkills.unshift("PowerBI");
            console.log(programmingSkills);
            console.log(`Index of  POWERBI : ${programmingSkills.indexOf("PowerBI")}`);    
            console.log(`Last Index of POWERBI : ${programmingSkills.lastIndexOf("PowerBI")}`);
          }}>lastIndexOf()</button>


          {/* IS ARRAY STATIC */}
          <button type="button" onClick={ () => {
            console.clear();
            console.log("IS ARRAY ::");
            let myName = "Sai Madhava";
            console.log(myName);
           console.log(`isArray : ${Array.isArray(myName)}`);
          console.log(programmingSkills);
           console.log(`isArray : ${Array.isArray(programmingSkills)}`);

          }}>isArray()</button>

           {/* REVERSE METHOD */}
           <button type="button" onClick={ () => {
            console.clear();
            console.log("REVERSE ::");
            console.log(`FRUITS : ${fruits}`);
            fruits.reverse();
            console.log(`REVERSE :`);  
            console.log(fruits);        
            console.log(`fruits : ${vegetables}`);
            vegetables.reverse();
            console.log(`REVERSE :`);   
            console.log(vegetables);          
          }}>reverse()</button>

           {/* SORT METHOD */}
           <button type="button" onClick={ () => {
            console.clear();
            console.log("SORT ::");  
            console.log("FRUITS ::")  
            console.log(fruits);
            fruits.sort();
            console.log(`After Sorting...`)
            console.log(fruits);
            console.log("VEGETABLES ::")
            console.log(vegetables);
            vegetables.sort();
            console.log(`After Sorting...`)
            console.log(vegetables);
            console.log("PROGRAMMING SKILLS ::")
            console.log(programmingSkills);
            programmingSkills.sort();
            console.log(`After Sorting...`)
            console.log(programmingSkills);
          }}>sort()</button>

          {/* SORT NUMBER METHOD */}
          <button type="button" onClick={ () => {
            console.clear();
            console.log("SORT NUMBER::");  
            let numberArray = [40, 100, 1, 5, 25, 10];
            console.log("Number Array ::")
            console.log(numberArray);
            numberArray.sort();
            console.log("After Sort ::")
            console.log(numberArray);
            numberArray.sort(function(a, b){return a-b});
            console.log(numberArray);
            
          }}>sortNumber()</button>
      </div>
      <hr/>

      {/* ARRAY METHODS 3 - NOV25 */}
      <div>
        <h2>ARRAY METHODS - 3</h2>
        <div>

          {/* FOR EACH METHOD */}
        <button type="button" onClick={ () => {
            console.clear();
            console.log("FOREACH() ::");
            console.log("FOR ::");
            for(let i=0; i<programmingSkills.length; i++) {
              console.log(programmingSkills[i]);
            }
            console.log("FOREACH ::");
            programmingSkills.forEach( (element,index) => {
              console.log(`${index} : ${element}`);
              // console.log("HELLO PROGRAMMER");
            })
          }}>forEach()</button>

          {/* EVERY METHOD */}
          <button type="button" onClick={ () => {
            console.clear();
            console.log("EVERY() ::");
            console.log("IFELSE ::");
            let marksArray = [89,75,45,29,36,90,89,75,45,29,36,90,89,75,45,29,36,90,89,75,45,29,36,90]
            if(marksArray[0]>=35 && marksArray[1]>=35 && marksArray[2]>=35 && marksArray[3]>=35 &&
              marksArray[4]>=35 && marksArray[5]>=35 
            ){
              console.log(marksArray);
              console.log("STUDENT PASSED");
            }
            else {
              console.log(marksArray);
              console.log("STUDENT FAILED");
            }
            console.log("EVERY ::")
            let result = marksArray.every( (element,index) => {
              return element>=35
            })
            if(result == true){
              console.log(marksArray);
              console.log("STUDENT PASSED");
            }
            else{
              console.log(marksArray);
              console.log("STUDENT FAILED");
            }

          }}>every()</button>

           {/* SOME METHOD */}
           <button type="button" onClick={ () => {
            console.clear();
            console.log("SOME() ::");
            console.log("IFELSE ::");
            let marksArray = [89,75,45,29,36,90,89,75,45,29,36,90,89,75,45,29,36,90,89,75,45,29,36,90]
            if(marksArray[0]>=35 || marksArray[1]>=35 && marksArray[2]>=35 || marksArray[3]>=35 ||
              marksArray[4]>=35 || marksArray[5]>=35 
            ){
              console.log(marksArray);
              console.log("STUDENT PASSED");
            }
            else {
              console.log(marksArray);
              console.log("STUDENT FAILED");
            }
            console.log("SOME ::")
            let result = marksArray.some( (element,index) => {
              return element>=35
            })
            if(result == true){
              console.log(marksArray);
              console.log("STUDENT PASSED");
            }
            else{
              console.log(marksArray);
              console.log("STUDENT FAILED");
            }

          }}>some()</button>

          {/* FILTER METHOD */}
          <button type="button" onClick={ () => {
            console.clear();
            console.log("FILTER() ::");
            let marksArray = [89,75,45,29,36,90,89,75,45,29,36,90,89,75,45,29,36,90,89,75,45,29,36,90]
           console.log(marksArray);
           let filteredArray = marksArray.filter( (element,index) => {
              return element>80
           })
           console.log(`Filtered Array above>80 : ${filteredArray}`);
           let filteredArrayEven = marksArray.filter( (element,index) => {
            return element % 2 == 0;
         })
         console.log(`Filtered Array EVEN: ${filteredArrayEven}`);
         let filteredArrayOdd = marksArray.filter( (element,index) => {
          return element % 2 != 0;
       })
       console.log(`Filtered Array ODD: ${filteredArrayOdd}`);

          }}>filter()</button>

          {/* FIND & FINDINDEX METHOD */}
          <button type="button" onClick={ () => {
            console.clear();
            console.log("FIND() & FINDINDEX () ::");
            let findFindIndexArray = [11,22,111,333,444,55,66,77,88,99,100,85,12,36,8];
            let findResult = findFindIndexArray.find( (element) => {
              return element <90;
            })
            let findIndexResult = findFindIndexArray.findIndex( (element) => {
              return element >90;
            })
            console.log(`FIND RESULT : ${findResult}`);
            console.log(`FINDINDEX RESULT : ${findIndexResult}`);
          
          }}>find() & findIndex()</button>

           {/* FINDLAST & FINDLASTINDEX METHOD */}
           <button type="button" onClick={ () => {
            console.clear();
            console.log("FINDLAST() & FINDLASTINDEX() ::");
            let findLastFindLastIndexArray = [11,22,111,333,444,55,66,77,88,99,100,85,12,36,8];
            let findLastResult = findLastFindLastIndexArray.findLast( (element) => {
              return element <90;
            })
            let findLastIndexResult = findLastFindLastIndexArray.findLastIndex( (element) => {
              return element >90;
            })
            console.log(`FINDLAST RESULT : ${findLastResult}`);
            console.log(`FINDLASTINDEX RESULT : ${findLastIndexResult}`);
          }}>findLast() & findLastIndex()</button>


          {/* REDUCE NUMBER METHOD */}
          <button type="button" onClick={ () => {
            console.clear();
            console.log("REDUCE() & REDUCERIGHT()  ::");
            let marksArray = [89,75,45,29,36,90,];
            let totalReduce = marksArray.reduce( (total,element,index) => {
              return total += element;
            });
            console.log(marksArray);
            console.log(`TOTAL REDUCE MARKS : ${totalReduce}`);

            let totalReduceRight = marksArray.reduceRight( (total,element,index) => {
              return total += element;
            });
            console.log(marksArray);
            console.log(`TOTAL REDUCE RIGHT : ${totalReduceRight}`)
            
          }}>reduce() & reduceRight() - NUMBER</button>

          {/* REDUCE STRING METHOD */}
          <button type="button" onClick={ () => {
            console.clear();
            console.log("REDUCE() & REDUCERIGHT()  ::");
            let aplhabetArray = ["a","e","i","o","u"];
            let alphabetReduce = aplhabetArray.reduce( (total,element,index) => {
              return total += element;
            });
            console.log(aplhabetArray);
            console.log(`VOWELS REDUCE : ${alphabetReduce}`);

            let alphabetReduceRight = aplhabetArray.reduceRight( (total,element,index) => {
              return total += element;
            });
            console.log(aplhabetArray);
            console.log(`VOWELS REDUCE RIGHT : ${alphabetReduceRight}`)
            
          }}>reduce() & reduceRight() - STRING</button>

          {/* MAP METHOD */}
          <button type="button" onClick={ () => {
            console.clear();
            console.log("MAP() ::");
            // STRING ADD
            console.log("MAP BEFORE (STRING) ::");
            console.log(programmingSkills);

            let mapResult = programmingSkills.map( (element,index) => {
              return `Skill : ${element}`
            }) 
            console.log("MAP AFTER (STRING)::");          
            console.log(mapResult);

            // NUMBERS ADD
            let marksMapArray = [89,75,45,29,30,90,];
            console.log("MAP BEFORE (NUMBER)::");
            console.log(marksMapArray);
            let marksMapResult = marksMapArray.map( (element,index) => {
              return element + 5;

            })
            console.log("MAP AFTER (NUMBER)::");
            console.log(marksMapResult);

            
          }}>map()</button>

          <hr/>

          <div>
          <h1 ref={headingOneResultRef}></h1>
          {programmingSkillsWithLogos.map( (element, index) => {
              return (
                <div className='programSkills'>
                  <img src={element.image} alt={element.name}></img>
                  <label className='labelSkill'>{element.name}</label>
                </div>
              )
          })
          }
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
