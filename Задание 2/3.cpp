#include <iostream>
using namespace std;

int main()
{   
    int a, b, c;

    cout << "Введите 3 числа: "<< "\n";
    cout << "-->";
    cin >> a;
    cout << "-->";
    cin >> b;
    cout << "-->";
    cin >> c;

    
    if ((a >= b) && (a >= c))
    {
        cout << "Максимальное число: " << a;
    }
    if ((b >= c) && (b >= a))
    {
        cout << "Максимальное число: " << b;
    }
    if ((c >= b) && (c >= b))
    {
        cout << "Максимальное число: " << c;
    }
}