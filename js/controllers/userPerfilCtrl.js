angular.module("portfolioPessoal").controller("userPerfilCtrl", function($scope){
    $scope.titulo = "Portfólio Pessoal";
    $scope.nome = "Igor Lucas N Silva";
    $scope.cargo = "Estudante de Sistemas de Informação";
    $scope.infoAcademicas = "Atuamente estudante do curso de bacharel em sistemas de informação no centro universitário UniFanor.";
    $scope.infoMercado = ["Integrante do projeto da fábrica de software no centro universitário UniFanor."
                         ,"Trainee em Desenvolvimento de Software pela empresa IVIA."
                         ,"Estagiário de Sistemas de Informação na Organização Farias Brito."];

    
    $scope.openAccordion = function(id){
        var elementT = document.getElementById(id);
        var elementC = elementT.querySelector('.ui-accordion-content');
        elementC.classList.toggle("ui-accordion-close");
        elementC.classList.toggle("ui-accordion-open");
    }

});