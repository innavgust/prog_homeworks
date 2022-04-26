#include <iostream>
using namespace std;

int main()
{   
    int i, n, a, b, fl = 0;

    for (i = 1; i <= 10; i++)
    {
        a = rand () % 10 + 1;
        b = rand () % 10 + 1;
        
        cout << a << " * " << b << " = ";
        cin >> n;
        
        if (a*b == n)
        {
            continue;
        }
        else
        {
            fl = fl + 1;
            cout << "Ошибка! " << a << " * " << b << " = " << a*b << "\n";
        }
    }
    
    cout << "Правильных ответов: " << 10 - fl << "\n";
    cout << "Неправильных ответов: " << fl << "\n";
}