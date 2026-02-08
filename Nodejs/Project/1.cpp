#include <bits/stdc++.h>
using namespace std;

int main() {
	
	int Test_cases;
	int no_of_day;
	
    while(Test_cases>0){
        cin>>no_of_day;
        int arr[no_of_day];
        for(int i=0;i<no_of_day;i++){
            cin>>arr[i];
        }
        
        int size=sizeof(arr);
         if(size==1){
             cout<< 1;
         }
         int max_streak=INT_MIN;
         int streak=0;
         for(int i=0;i<size;i++){
             if(arr[i]>=1){
                 streak+=1;
             }
             if(arr[i]==0){
                 if(max_streak<=streak){
                     max_streak=streak;
                 }
             }
             if(i==size-1){
                 if(size>=max_streak){
                     max_streak=streak;
                 }
             }
         }
         cout<<max_streak;
         Test_cases--;
    }
return 0;
}
