import tidalapi
from flask import Flask, render_template, redirect, request, url_for
from requests.exceptions import HTTPError


app = Flask(__name__)
session = tidalapi.Session()

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        session.login(username, password)
        if session.check_login():
            return redirect(url_for('player'))
        else:
            return render_template('login.html')
    if request.method == 'GET':
        return render_template('login.html')


@app.route('/favourites')
def favourites():
    if session.check_login():
        fav = tidalapi.Favorites(session, session.user.id)
        playlists = fav.playlists()
        return render_template('favourites.html', playlists=playlists)
    else:
        return redirect(url_for('index'))


@app.route('/player')
def player():
    if session.check_login():
        tracks = session.get_album_tracks(album_id=16909093)
        track = tracks[0]
        track_id = tracks[0].id
        media_url = session.get_media_url(track_id)
        return render_template('player.html', media_url=media_url)
    else:
        return redirect(url_for('index'))


@app.errorhandler(Exception)
def unhandled_exception(e):
    app.logger.error('Unhandled Exception: %s', (e))
    return render_template('500.html', error=e), 500


if __name__ == '__main__':
    app.run()