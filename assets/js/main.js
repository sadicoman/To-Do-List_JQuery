// Générer les tâches de base
// Création d'un tableau contenant les tâches de base
var baseTasks = ["Buy groceries", "Call mom", "Finish project"];

// Boucle pour parcourir le tableau et ajouter chaque tâche à la liste
for (var i = 0; i < baseTasks.length; i++) {
	// Utilisation de .append() pour ajouter un nouvel élément .task au div #tasks
	$("#tasks").append(
		'<div class="task">' + baseTasks[i] + ' <button class="delete">Delete</button></div>',
	);
}

// Ajouter une nouvelle tâche
// Attacher un écouteur d'événements 'click' au bouton #add-task
$("#add-task").click(function () {
	// Récupération de la valeur du champ texte #new-task
	var newTask = $("#new-task").val();

	// Vérification que le champ n'est pas vide
	if (newTask !== "") {
		// Ajout de la nouvelle tâche à la liste
		$("#tasks").append(
			'<div class="task">' + newTask + ' <button class="delete">Delete</button></div>',
		);

		// Effacement du champ texte
		$("#new-task").val("");
	}
});

// Supprimer une tâche
// Utilisation de .on() pour attacher un écouteur d'événements 'click' aux boutons .delete
// Note : on attache l'écouteur au parent (#tasks) pour permettre la suppression de tâches ajoutées dynamiquement
$("#tasks").on("click", ".delete", function () {
	// Suppression de la tâche parente lorsqu'on clique sur Delete
	$(this).parent().remove();
});
