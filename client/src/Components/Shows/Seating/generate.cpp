#include<bits/stdc++.h>

using namespace std;

int main(){

    cout << "[";
    for(int i = 0; i < 26; i++){
        cout << "'"<< (char)('A' + i) << "', " ;
    }
    cout << "]";
}