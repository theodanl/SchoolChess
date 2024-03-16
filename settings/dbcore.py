import cgi
import sqlite3

# Получение данных из запроса
form = cgi.FieldStorage()
name = form.getvalue('name')
phone_number = form.getvalue('tel_number_login')

# Подключение к базе данных SQLite
conn = sqlite3.connect('member.db')
cursor = conn.cursor()

cursor.execute('''
    CREATE TABLE IF NOT EXISTS FormData (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        phone_number TEXT
    )
''')

# Функция для сохранения данных из формы
def save_form_data(name, phone_number):
    try:
        cursor.execute('''
            INSERT INTO FormData (name, phone_number) VALUES (?, ?)
        ''', (name, phone_number))
        conn.commit()
        print("Данные успешно сохранены в базу данных.")
    except Exception as e:
        print("Ошибка при сохранении данных в базу данных:", e)

# Сохранение данных из формы
save_form_data(name, phone_number)

# Закрытие соединения с базой данных
conn.close()