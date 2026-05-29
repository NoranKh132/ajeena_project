from decimal import Decimal
from django.core.management.base import BaseCommand
from shop.models import Category, Product

class Command(BaseCommand):
    help = 'Seed bakery menu products'

    def handle(self, *args, **kwargs):
        data = [
            ('sourdough', 'Sourdough', 'الساور دو', [
                ('Plain white sourdough', 'ساور دو أبيض سادة', 90, 'Regular loaf', 'رغيف'),
                ('Herb sourdough', 'ساور دو أبيض بالحبوب', 100, 'Regular loaf', 'رغيف'),
                ('Diet sourdough', 'ساور دو أبيض دايت', 110, 'Regular loaf', 'رغيف'),
                ('Whole wheat diet sourdough', 'ساور دو قمح كامل سادة (دايت)', 110, 'Regular loaf', 'رغيف'),
                ('Whole wheat sourdough with herbs', 'ساور دو قمح كامل بالحبوب (دايت)', 120, 'Regular loaf', 'رغيف'),
                ('Whole wheat diet sourdough with herbs', 'ساور دو قمح كامل بالحبوب (دايت)', 130, 'Regular loaf', 'رغيف'),
            ]),
            ('biscuits', 'Biscuits', 'البسكويت', [
                ('Plain oat biscuit', 'بسكوت شوفان سادة', 120, 'Half kilo approx.', 'نصف كيلو تقريبًا'),
                ('Herb oat biscuit', 'بسكوت شوفان بالحبوب', 120, 'Half kilo approx.', 'نصف كيلو تقريبًا'),
                ('Cinnamon oat biscuit', 'بسكوت شوفان بالقرفة سادة', 120, 'Half kilo approx.', 'نصف كيلو تقريبًا'),
                ('Cinnamon & herb oat biscuit', 'بسكوت شوفان بالقرفة والحبوب', 120, 'Half kilo approx.', 'نصف كيلو تقريبًا'),
                ('Sugar free plain oat biscuit', 'بسكوت شوفان سادة سكر دايت', 130, 'Half kilo approx.', 'نصف كيلو تقريبًا'),
                ('Sugar free herb oat biscuit', 'بسكوت شوفان بالحبوب سكر دايت', 140, 'Half kilo approx.', 'نصف كيلو تقريبًا'),
                ('Sugar free cinnamon biscuit', 'بسكوت شوفان بالقرفة سكر دايت', 140, 'Half kilo approx.', 'نصف كيلو تقريبًا'),
                ('Sugar free cinnamon & herb biscuit', 'بسكوت شوفان بالقرفة والحبوب سكر دايت', 150, 'Half kilo approx.', 'نصف كيلو تقريبًا'),
            ]),
            ('pizza', 'Pizza', 'البيتزا', [
                ('Medium pizza dough', 'عجينة بيتزا وسط', 30, '1 piece', 'قطعة'),
                ('Medium whole wheat pizza dough', 'عجينة بيتزا نص سوا وسط', 35, '1 piece', 'قطعة'),
            ]),
            ('ciabatta', 'Ciabatta', 'شيباتا', [
                ('White ciabatta 8 pieces', 'شيباتا أبيض ٨ قطع', 100, '8 pieces', '٨ قطع'),
                ('White ciabatta 4 pieces', 'شيباتا أبيض ٤ قطع', 55, '4 pieces', '٤ قطع'),
                ('Whole wheat ciabatta', 'شيباتا قمح كامل ٦ قطع', 120, '6 pieces', '٦ قطع'),
                ('Whole wheat ciabatta small', 'شيباتا قمح كامل ٤ قطع', 70, '4 pieces', '٤ قطع'),
            ]),
        ]
        Product.objects.all().delete()
        Category.objects.all().delete()
        for slug, en, ar, products in data:
            category = Category.objects.create(slug=slug, name_en=en, name_ar=ar)
            for index, (name_en, name_ar, price, size_en, size_ar) in enumerate(products):
                Product.objects.create(
                    category=category,
                    name_en=name_en,
                    name_ar=name_ar,
                    price=Decimal(str(price)),
                    size_en=size_en,
                    size_ar=size_ar,
                    description_en='Naturally fermented, handcrafted, and baked fresh with simple ingredients.',
                    description_ar='مخبوز طبيعي بتخمير بطيء ومكونات بسيطة، معمول يدويًا وبحب.',
                    is_featured=index < 2,
                    is_available=True,
                )
        self.stdout.write(self.style.SUCCESS('Seeded bakery products successfully.'))
