#include <iostream>
#include <vector>
using namespace std;

int n;
int q;
int k;

vector<int> inputArray;
int userInput; 
int countInput = 0;
vector<vector<int>> collectArray;
vector<int> collectAnswer;

int arrNum;
int elemNum;
int elemValue;


void inputValues() {
    cin >> n >> q;

    for (int i = 0; i < n; i++) {
        cin >> k;

        while (countInput < k && cin >> userInput) {
            inputArray.push_back(userInput);
            countInput++;
        }

        collectArray.push_back(inputArray);
        inputArray.clear();
        countInput = 0;
    }

    for (int j = 0; j < q; j++) {
        cin >> arrNum >> elemNum;

        elemValue = collectArray[arrNum][elemNum];
        
        collectAnswer.push_back(elemValue);
    }
}

int main() {
    inputValues();

    for (int ans = 0; ans < q; ans++) {
        cout << collectAnswer[ans] << endl;
    }

    return 0;
}

