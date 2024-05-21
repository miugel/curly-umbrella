from flask import Flask, request, jsonify
from flask_cors import CORS
from homeharvest import scrape_property

app = Flask(__name__)
CORS(app, resources={r"/scrape": {"origins": "localhost:3000"}})

@app.route('/scrape', methods=['GET'])
def scrape():
	location = request.args.get('location')
	listing_type = request.args.get('listing_type', 'for_sale')
	past_days = int(request.args.get('past_days', 30))

	properties = scrape_property(
		location=location,
		listing_type=listing_type,
		past_days=past_days
	)

	return jsonify(properties.to_dict(orient='records'))

if __name__ == '__main__':
	app.run(debug=True)