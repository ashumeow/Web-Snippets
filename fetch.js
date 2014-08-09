
       function loadResources() 
       {
          var image1 = new Image();
          image1.onload = resourceTiming;
          image1.src = 'http://www.w3.org/Icons/w3c_main.png';
       }
       
       function resourceTiming() 
       {
           var resourceList = window.performance.getEntriesByType("resource");
           for (i = 0; i < resourceList.length; i++)
           {
              if (resourceList[i].initiatorType == "img") 
              {
                 alert("End to end resource fetch: "+ resourceList[i].responseEnd - resourceList[i].startTime);
              }
           }
       }
 
