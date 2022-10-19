verify:
	ecspresso --config config.yml verify
create:
	ecspresso --config config.yml create
status:
	ecspresso --config config.yml status
diff:
	ecspresso --config config.yml diff
register:
	ecspresso --config config.yml register
plan:
	ecspresso --config config.yml deploy --dry-run
deploy:
	ecspresso --config config.yml deploy
deploy--no-wait:
	ecspresso --config config.yml deploy --no-wait
rollback:
	ecspresso --config config.yml rollback --deregister-task-definition
refresh:
	ecspresso --config config.yml refresh
destroy:
	ecspresso --config config.yml deploy --skip-task-definition --tasks 0
	ecspresso --config config.yml delete --force
