#include <iostream>
#include <cmath>
using namespace std;

int main()
{   
    int i, n;
    
    cout << "Введите максимальную степень: ";
    cin >> n;

    for (i = 1; i <= n; i++)
    {
        cout << "2 в : " << i << "   " << pow(2,i) << "\n";
    }
}