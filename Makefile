develop: clean build run

build:
	docker compose build

clean:
	docker compose stop -t0
	docker compose rm -f

run:
	docker compose up

shell:
	docker compose run react \
		sh