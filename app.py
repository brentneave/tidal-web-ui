import tidalapi
from flask import Flask, render_template
from requests.exceptions import HTTPError

app = Flask(__name__)


def get_session():
    try:
        session = tidalapi.Session()
    except HTTPError, e:
        raise Exception(e)
    try:
        session.login('username', 'password')
    except HTTPError, e:
        raise Exception(e)
    return session

@app.route('/')
def index():
    session = get_session()
    tracks = session.get_album_tracks(album_id=16909093)
    return render_template('index.html', tracks=tracks)


@app.route('/favourites')
def favourites():
    session = get_session()
    fav = tidalapi.Favourites(session, session.user.id)
    playlists = fav.playlists()
    return render_template('favourites.html', playlists=playlists)


@app.errorhandler(Exception)
def unhandled_exception(e):
    app.logger.error('Unhandled Exception: %s', (e))
    return render_template('500.html', error=e), 500


if __name__ == '__main__':
    app.run()