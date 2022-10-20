const codeSnippits = {};
  codeSnippits.c = `#include<stdio.h>
  int main(){ 
  printf("Hello world");
  return 0;
}`;
  codeSnippits.cpp = `#include<iostream>
    int main(){ 
    std::cout << "Hello World!";
    return 0;
    }`;

  codeSnippits.java = `class A {
   public static void main(String args[]){
    System.out.prontln("Hello world..!);
      }
    }`;

    codeSnippits.py = `print("Hello world!")`;
    codeSnippits.js = `console.log("Hello world")`



    module.exports = codeSnippits;