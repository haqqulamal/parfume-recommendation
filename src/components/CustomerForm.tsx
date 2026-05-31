import { useState } from 'react';
import type { CustomerData } from '../types';

interface CustomerFormProps {
  initialData: CustomerData;
  onBack: () => void;
  onSubmit: (data: CustomerData) => void;
}

const genderOptions = ['Perempuan', 'Laki-laki', 'Non-binary', 'Lebih nyaman tidak menyebutkan'];

function CustomerForm({ initialData, onBack, onSubmit }: CustomerFormProps) {
  const [formData, setFormData] = useState<CustomerData>(initialData);

  const isValid = formData.name.trim() !== '' && formData.age.trim() !== '' && formData.gender.trim() !== '';

  const updateField = (field: keyof CustomerData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  return (
    <section className="mx-auto w-full max-w-2xl">
      <div className="rounded-[1.75rem] border border-white/75 bg-white/72 p-5 shadow-premium backdrop-blur sm:p-8">
        <div className="mb-8 space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Customer profile</p>
          <h2 className="font-display text-4xl text-ink">Kenalan dulu sebentar</h2>
          <p className="leading-7 text-ink/62">
            Data ini hanya disimpan sementara di state aplikasi selama sesi rekomendasi berjalan.
          </p>
        </div>

        <form
          className="space-y-5"
          onSubmit={(event) => {
            event.preventDefault();
            if (isValid) {
              onSubmit({
                name: formData.name.trim(),
                age: formData.age.trim(),
                gender: formData.gender,
              });
            }
          }}
        >
          <label className="block space-y-2">
            <span className="text-sm font-semibold text-ink/75">Nama</span>
            <input
              value={formData.name}
              onChange={(event) => updateField('name', event.target.value)}
              className="w-full rounded-2xl border border-ink/10 bg-pearl px-4 py-3.5 outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15"
              placeholder="Masukkan nama customer"
              required
            />
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-semibold text-ink/75">Usia</span>
            <input
              value={formData.age}
              onChange={(event) => updateField('age', event.target.value)}
              className="w-full rounded-2xl border border-ink/10 bg-pearl px-4 py-3.5 outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15"
              inputMode="numeric"
              min="1"
              placeholder="Contoh: 21"
              required
              type="number"
            />
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-semibold text-ink/75">Gender</span>
            <select
              value={formData.gender}
              onChange={(event) => updateField('gender', event.target.value)}
              className="w-full rounded-2xl border border-ink/10 bg-pearl px-4 py-3.5 outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15"
              required
            >
              <option value="">Pilih gender</option>
              {genderOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <div className="flex flex-col-reverse gap-3 pt-3 sm:flex-row sm:justify-between">
            <button
              type="button"
              onClick={onBack}
              className="rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink/72 transition hover:border-ink/35 hover:bg-white"
            >
              Kembali
            </button>
            <button
              type="submit"
              disabled={!isValid}
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-pearl shadow-soft transition hover:bg-black disabled:cursor-not-allowed disabled:bg-ink/30"
            >
              Lanjut ke Quiz
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CustomerForm;
