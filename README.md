# online_food_ordering

# Introduction

This project is ...

### Main features

* User registration and logging in as demo

* ...


# Usage

First clone the repository from Github and switch to the new directory:

    $ git clone git@github.com/USERNAME/{{ project_name }}.git
    $ cd {{ project_name }}


Create project virtualenv for project:

    $ python3 -m venv ./venv


Activate the virtualenv for project:

    $ source ./venv/bin/activate


Install project dependencies:

    $ pip install -r requirements.txt


Then simply apply the migrations:

    $ python manage.py migrate


You can now run the development server:

    $ python manage.py runserver
