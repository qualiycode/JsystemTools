# Index2
This project contains Tools that support Jsystem LOG.
Index2 allows filtering the JSystem Logs and helps analyzing the Run results.
The Scripts analyze the "report2.html" file that is being created by the JSystem and create the new Format. Using this file we create a new file contains additional options (JavaScript).


[ Features ]
------------
+ Allow filtering results by Tester. 
+ Mark Tests as passed on using Colors. (Helps when need to check long list of failures to keep track of those we already checked).
+ Display Failures Only.


[ How to Use ]
--------------
Place all the files inside the Jsystem Log folder(JSYSTEM_INSTALLATION/log/).
If you're using linux please add execution privileges (chmod +x getResults).
After or even during the JSystem Runner is running a Scenario/Regression/Sanity and etc execute the GetResults Script (./getResults).
Now open with your browser the Jsystem Log and replace "index.html" to "index2.html" in the URL Line.