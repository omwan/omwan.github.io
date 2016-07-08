app.controller('mainController', ['$scope', function($scope) {
    $scope.title = "Olivia Wan";
    $scope.links = [
        {
            'title' : "linkedin",
            'icon' : 'fa-linkedin',
            'link' : 'http://linkedin.com/in/olivia-wan-22645ab8'
        },
        {
            'title' : "github",
            'icon' : 'fa-github',
            'link' : 'http://github.com/omwan'
        },
        {
            'title' : "email",
            'icon' : 'fa-envelope',
            'link' : 'mailto:wan.o@husky.neu.edu'
        },
        {
            'title' : "resume",
            'icon' : 'fa-user',
            'link' : 'resume_f16.pdf'
        }
    ];
    $scope.projects = [
        {
            'header' : "Class Assignments",
            'assignments' : [
                {
                    'title' : "Forbidden Island",
                    'description' : 'Navigate a sinking island to gather all the pieces of a helicopter and bring it to the top of the island before the rising water levels catch you! Toggle between "perfect" diamond island or various different randomly generated terrains.',
                    'madewith' : "Java",
                    'date' : "Spring 2016",
                    'org' : "CS 2510",
                    'links' : [
                        {
                            'title' : "GitHub",
                            'href' : "http://github.com/omwan/forbidden-island"
                        }
                    ]
                },
                {
                    'title' : "Kruskal Maze",
                    'description' : "Creates randomly generated mazes using Kruskal's algorithm for minimum spanning trees; can be solved by manually traversing the maze or triggering a depth-first or breadth-first search algorithm.",
                    'madewith' : "Java",
                    'date' : "Spring 2016",
                    'org' : "CS 2510",
                    'links' : [
                        {
                            'title' : "GitHub",
                            'link' : "http://github.com/omwan/kruskal-maze"
                        },
                    ]
                },
                {
                    'title' : "Tetris",
                    'description' : "Recreation of classic Tetris game--stack blocks to try to clear complete rows without hitting the top of the screen.",
                    'madewith' : "Racket",
                    'date' : "Fall 2015",
                    'org' : "CS 2500",
                    'links' : [
                        {
                            'title' : "GitHub",
                            'link' : "http://github.com/omwan/tetris"
                        },
                    ]
                },
                {
                    'title' : "Battleship",
                    'description' : "Recreation of classic Battleship game against computer AI--try to guess the location of your opponent's ships and sink them all before they find and sink yours! ",
                    'madewith' : "Java (Processing)",
                    'date' : "Spring 2015",
                    'org' : "Honors CS",
                    'links' : [
                        {
                            'title' : "GitHub",
                            'link' : "http://github.com/omwan/battleship"
                        },
                        {
                            'title' : "Website",
                            'link' : "http://omwan.github.io/battleship"
                        }
                    ]
                }
            ]
        },
        {
            'header' : "Extracurricular Projects",
            'assignments' : [
                {
                    'title' : "iGEM Wiki",
                    'description' : 'Designed and coded an online Wiki for 2015-16 Northeastern iGEM Team documenting development and progress of custom bioengineering research project.',
                    'madewith' : "HTML/CSS, Bootstrap, and MediaWiki/iGEM Servers",
                    'date' : "Summer 2016",
                    'org' : "Northeastern iGEM Team",
                    'links': [
                        {
                            'title' : "GitHub",
                            'link' : "https://github.com/omwan/iGEM-wiki-neu16"
                        },
                        {
                            'title' : "Website",
                            'link' : "http://2016.igem.org/Team:Northeastern"

                        }
                    ]
                },
                {
                    'title' : "Perfect Party Playlist",
                    'description' : "Sorts a Spotify playlist using a custom Python algorithm and attributes from Spotify's API including danceability, variance, etc to create a pleasing party experience.",
                    'madewith' : "Python, Spotify API, and Flask",
                    'date' : "Winter 2016",
                    'org' : "HuskyHacks 2016",
                    'links' : [
                        {
                            'title' : "GitHub",
                            'link' : "https://github.com/omwan/playlist"
                        },
                        {
                            'title' : "Website",
                            'link' : "http://rocketleague.pub:5001"

                        }
                    ]
                }
            ]
        }
    ];
//    $http.get('projects.json').success(function(data) {
//        $scope.projects = data;
//    });
}]);
