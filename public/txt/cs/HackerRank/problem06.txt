#include <iostream>
using namespace std;

int a;
int b;
int c;
int d;
int maxValue = 0;

void findMax() {
    cin >> a >> b >> c >> d;

    if (a > maxValue) {
        maxValue = a;
    } else {
        maxValue = maxValue;
    }

    if (b > maxValue) {
        maxValue = b;
    } else {
        maxValue = maxValue;
    }

    if (c > maxValue) {
        maxValue = c;
    } else {
        maxValue = maxValue;
    }

    if (d > maxValue) {
        maxValue = d;
    } else {
        maxValue = maxValue;
    }
}

int main() {
    findMax();
    cout << maxValue << endl;

    return 0;
}

