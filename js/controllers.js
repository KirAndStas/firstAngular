'use strict';

angular.module('testApp')
  .controller('ExampController', ['$scope', function($scope) {

                                                                //Here function for create numbers
    var randomNumber = function() {
      var whereChoose_numberSize = [1, 2];
      var whereChoose_first = '123456789';
      var whereChoose_second = '0123456789';
      var numberSize = whereChoose_numberSize[Math.floor(Math.random()*whereChoose_numberSize.length)];
      if (numberSize == 1) {
        $scope.readyNumber_first = '' + whereChoose_first.charAt(Math.floor(Math.random()*whereChoose_first.length));
      } else {
          $scope.readyNumber_first = '10'
        };

      var numberSize = whereChoose_numberSize[Math.floor(Math.random()*whereChoose_numberSize.length)];
      if (numberSize == 1) {
        $scope.readyNumber_second = '' + whereChoose_first.charAt(Math.floor(Math.random()*whereChoose_first.length));
      } else {
          $scope.readyNumber_second = '10'
        };

    };
// Here array for user choice
    $scope.userChoice = [];
                                                            // Here are functions for every checkbox which help us to sort our json file
    $scope.selectAd = function() {
      $scope.userChoice.unshift('add');
      };

    $scope.selectSu = function() {
      $scope.userChoice.unshift('sub');
      };

    $scope.selectMu = function() {
      $scope.userChoice.unshift('mult');
      };

    $scope.selectDi = function() {
      $scope.userChoice.unshift('div');
      };

                                                                // Example generator
    var makeExamp = function() {

      var  arrayExamp =[];
      var arrayResutl = [];

      var random_Number = Math.floor(Math.random()*$scope.userChoice.length);
      if ($scope.userChoice.length > 0) {
        var whichType = $scope.userChoice[random_Number];

        if (whichType == 'add') {
          randomNumber();
          $scope.exampler = $scope.readyNumber_first + '+' + $scope.readyNumber_second;
          $scope.resulter = parseInt($scope.readyNumber_first) + parseInt($scope.readyNumber_second);
        }
        else if (whichType == 'sub') {
          randomNumber();
          if (parseInt($scope.readyNumber_first) > parseInt($scope.readyNumber_second)) {
            $scope.exampler = $scope.readyNumber_first + '-' + $scope.readyNumber_second;
            $scope.resulter = parseInt($scope.readyNumber_first) - parseInt($scope.readyNumber_second);
          }
          else {
            $scope.exampler = $scope.readyNumber_first + '-' + $scope.readyNumber_second;
            $scope.resulter = parseInt($scope.readyNumber_second) - parseInt($scope.readyNumber_first);
          }

        }
        else if (whichType == 'mult') {
          randomNumber();
          $scope.exampler = $scope.readyNumber_first + '*' + $scope.readyNumber_second;
          $scope.resulter = parseInt($scope.readyNumber_first) * parseInt($scope.readyNumber_second);
        }
        else {
          randomNumber();
          if (parseInt($scope.readyNumber_second) != 0) {
            $scope.exampler = $scope.readyNumber_first + '/' + $scope.readyNumber_second;
            $scope.resulter = Math.round(parseInt($scope.readyNumber_first) / parseInt($scope.readyNumber_second));
          } else {
            $scope.exampler = $scope.readyNumber_first + '/' + $scope.readyNumber_second;
            $scope.resulter = 'Infinity';
          }
        }

      }
      else {alert('You haven`t chosen anything. Let`s try do it again together')}
    };

                                                          // Function for submit button
    $scope.sub = function() {
      makeExamp();

//Make button anactive and reset button active
        $scope.dontTouch = true;
        $scope.isReseted = false;
        $scope.ad = true;
        $scope.su = true;
        $scope.mu = true;
        $scope.di = true;
    };

                                                      // Function for a reset button
    $scope.startAnew = function() {
// Make userChoice array clean
      $scope.userChoice = [];
//Make active submit button and all checkboxes
      $scope.dontTouch = false;
      $scope.ad = false;
      $scope.su = false;
      $scope.mu = false;
      $scope.di = false;
// Clean all ticks
      $scope.tickAd = false;
      $scope.tickSu = false;
      $scope.tickMu = false;
      $scope.tickDi = false;
// Make anactive reset button
      $scope.isReseted = true;
    };




// Here we add variable to make reset button anactive when page just load
    $scope.isReseted = true;

// Here we create a new array for answers of client
    $scope.whatSay = [];

//User answer
    $scope.userSay = "Type your answer here...";

//Here function for focus on textfield
    $scope.focusMe = function() {
      $scope.userSay = "";
    };

// Here we declare $scope variable for displayin on the monitor
    $scope.amountRight = 0;
    $scope.amountWrong = 0;

// Here function for submit button when client enter the answers
    $scope.checkWhatSay = function(userSay) {


      if (isNaN(userSay)) {
        $scope.showDanger = true;
      } else {
        var userSay_int = parseInt(userSay);
        $scope.showDanger = false;
  // Here we check number on natural value and value
        if (userSay_int < 0 || userSay_int >= 101) {
          $scope.showDanger = true;
        } else {
  // Add user`s answer to the array at the first place
          $scope.whatSay.unshift(userSay_int);
  // Here we code a functionality to clear type zone
          $scope.userSay = "Type your answer here...";
  // Here we check whether answer is right or wrong and display it
          if (userSay_int == $scope.resulter) {
            $scope.amountRight = $scope.amountRight + 1;
          } else {
            $scope.amountWrong = $scope.amountWrong + 1;
          }
  // Here we go to the next example according to the type
          makeExamp();
        };
      }




    };

 }]);
