#include <iostream>
using namespace std;

int main()
{   
    int n;

    cout << "Введите число: ";
    cin >> n;
    
    if (n % 2 == 0)
    {
        cout << n << " четное число";
    }
    else
    {
        cout << n << " нечетное число";
    }
}